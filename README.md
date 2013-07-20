[Lastfm Recent Tracks](http://www.pinceladasdaweb.com.br/blog/uploads/lastfm/)
=================

Get User Recent Tracks in Last.fm with jQuery and Handlebars.

##Usage

1. Paste right before your page's closing `</body>` tag
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/thirdparty/jquery.min.js"><\/script>')</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.3/handlebars.min.js"></script>
<script src="js/app.js"></script>
```

2. From within a script tag or a JS file
```javascript
Lastfm.init({
    template: $('#tracks-template').html(), // The ID of your template
    container: $('.container'),				// domNode to attach to
    username: 'rj',							// Last.fm username
    count: 18,								// Number of tracks to display. Maximum is 200
    apikey: '<API KEY HERE>' 				// Your API Key here.
})
```

3. Instructions for a API Key may be [read here](http://www.lastfm.com.br/api)

##Customize Template

1. To customize the template open the index.html file and look for the following block of code:

```javascript
<script id="tracks-template" type="text/x-handlebars-template">
    {{#each this}}
        <div class="lastfm cf">
            <div class="cover">
                <a href="{{link}}" title="{{song}}">
                    <img src="img/vinyl.png" class="highlight">
                </a>
                {{#if image}}
                <img alt="{{album}}" src="{{image}}">
                {{else}}
                <img alt="{{album}}" src="img/noartwork.png">
                {{/if}}
            </div>
            <div class="info">
                <p class="song">{{song}}</p>
                <p class="artist">{{artist}}</p>
                <p class="album">{{album}}</p>
            </div>
        </div>
    {{/each}}
</script>
```
Change the HTML as it deems necessary.
