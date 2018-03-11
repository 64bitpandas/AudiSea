AFRAME.registerComponent('voice-select', {
    init: function () {

        console.log("Voice Module Initialized");

        // Set up speech recognition.
        annyang.addCommands({
            'play only you': this.play('Only You'),
            'play stravinsky': this.play('Stravinsky'),
            'play let em in': this.play("Let 'Em In")
        });
        annyang.start();

    },

    play: function(title) {
        if(title !== undefined && title !== 'undefined') {
            $("#song").attr("src", "./songs/" + title + ".mp3");
            document.getElementById("song").play();
            console.log('play ' + title);
        }
    }
});
