
AFRAME.registerComponent('voice-select', {
    init: function () {

        console.log("Voice Module Initialized");

        // Set up speech recognition.
        annyang.addCommands({
            'play *song': this.songSearch.bind(this)
        });
        annyang.start();

    },

    play: function(title) {
        if(title !== undefined && title !== 'undefined') {
            $("#song").attr("src", "./songs/" + title + ".mp3");
            document.getElementById("song").play();
            console.log('play ' + title);
        }
    },
    songSearch: function (query) {
        console.log("Query: " + query);
        if (query.toUpperCase() === "Yazoo".toUpperCase()) {
            console.log("Voice Selected");
            this.play("yazoo");
        }
        else if (query.toUpperCase() === "stravinsky".toUpperCase()) {
            console.log("Voice Selected");
            this.play("stravinsky");
        }
        else if (query.toUpperCase() === "the beatles".toUpperCase()) {
            console.log("Voice Selected");
            this.play("the-beatles");
        }
        else if (query.toUpperCase() === "Paul anka".toUpperCase()) {
            console.log("Voice Selected");
            this.play("paul-anka");
        }

    }
});
