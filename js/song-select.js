$(".song-select").click(function() {
    $("#song").attr("src", "./songs/" + this.getAttribute("value") + ".mp3");
    if (this.getAttribute("value") === "yazoo") {
        $("#np").html("Only You")
    }
    if (this.getAttribute("value") === "stravinsky") {
        $("#np").html("Rite of Spring")
    }
    if (this.getAttribute("value") === "the-beatles") {
        $("#np").html("Lucy in the Sky With Diamonds")
    }
    if (this.getAttribute("value") === "paul-anka") {
        $("#np").html("Put Your Head on My Shoulder")
    }
    console.log('playing ' + this.getAttribute("value"));
})