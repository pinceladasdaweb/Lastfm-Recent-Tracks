/*---------------
 * jQuery Last.Fm Plugin by Pinceladas da Web
 * Example and documentation at: https://github.com/pinceladasdaweb/Lastfm-Recent-Tracks
 * Copyright (c) 2013
 * Version: 1.0.0 (13-ABR-2013)
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * Requires: jQuery v1.9 or later and Handlebars 1.0 or later
---------------*/

var Lastfm = {
	init: function(config) {
		this.url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+config.username+'&api_key='+config.apikey+'&limit='+config.count+'&format=json';
		this.template = config.template;
		this.container = config.container;
		this.fetch();
	},
	attachTemplate: function() {
		var template = Handlebars.compile(this.template);

		this.container.empty().append(template(this.tracks));
	},
	fetch: function() {
		var self = this;

		$.getJSON(this.url, function(data) {
			var feed = data.recenttracks.track;

			self.tracks = $.map(feed, function(track) {
				return {
					image: track.image[2]['#text'],
					song: track.name,
					artist: track.artist['#text'],
					album: track.album['#text'],
					link: track.url
				}
			});
			self.attachTemplate();
		});
	}
}

Lastfm.init({
	template: $('#tracks-template').html(),
	container: $('.container'),
	username: 'rj',
	count: 18,
	apikey: '<API KEY HERE>'
})