var Spotify = new SpotifyWebApi();
Spotify.getToken().then(function (response) {
  Spotify.setAccessToken(response.token);
});

AFRAME.registerComponent('spotify', {
  init: function () {
    
    console.log("Spotify Module Initialized");

    // Set up speech recognition.
    annyang.addCommands({
      'play *song': this.searchTrack.bind(this)
    });
    annyang.start();

    
  },

  searchTrack: function (query) {
    if (query === undefined || query === null)
     return;
    var audioEl;
    var el = this.el;
    // Create audio element to point to Spotify preview URL.
    audioEl = this.audioEl = document.createElement('audio');
    audioEl.id = "song"
    audioEl.crossOrigin = 'anonymous';
    audioEl.loop = true;
    audioEl.id = 'spotifyTrack';
    el.appendChild(audioEl);
    el.setAttribute('audioanalyser', { src: '#spotifyTrack' });
    var audioEl = this.audioEl;
    var el = this.el;
    console.log("Query: " + query);
    Spotify.searchTracks(query).then(function (results) {
      //var track = results.tracks.items[0];
      console.log(results.tracks.items);
      for(var i = 0; i < results.tracks.items.length; i++) {
        var previewUrl = results.tracks.items[i].preview_url;
        if (previewUrl !== undefined && previewUrl !== null) {
          console.log(previewUrl);
          el.emit('spotify-play', results);
          audioEl.src = previewUrl;
          audioEl.play();
          break;
        }
        else {
          console.log("Track: " + i.toString() + " Not Found! Trying next track.");
        }
        
      }
      
    });
  }


});
