var Spotify = new SpotifyWebApi();
Spotify.getToken().then(function (response) {
  Spotify.setAccessToken(response.token);
});

AFRAME.registerComponent('spotify', {
  init: function () {
    var audioEl;
    var el = this.el;
    console.log("Spotify Module Initialized");

    // Set up speech recognition.
    annyang.addCommands({
      'play *song': this.searchTrack.bind(this)
    });
    annyang.start();

    // Create audio element to point to Spotify preview URL.
    audioEl = this.audioEl = document.createElement('audio');
    audioEl.crossOrigin = 'anonymous';
    audioEl.loop = true;
    audioEl.id = 'spotifyTrack';
    el.appendChild(audioEl);
    el.setAttribute('audioanalyser', {src: '#spotifyTrack'});
  },

  searchTrack: function (query) {
    var audioEl = this.audioEl;
    var el = this.el;
    console.log("Query: " + query);
    Spotify.searchTracks(query).then(function (results) {
      var track = results.tracks.items[0];
      if (typeof track !== 'undefined' || typeof track !== 'null') {
        var previewUrl = track.preview_url;
        console.log(track.preview_url);
        window.alert("Song Not Found");
        el.emit('spotify-play', results);
        audioEl.src = track.preview_url;
        audioEl.play();
      }
      else  {
        console.log("Track Not Found!");
      }
    });
  }
});
