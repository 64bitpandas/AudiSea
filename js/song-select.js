$(".song-select").click(function() {
    $("#song").attr("src", "./songs/" + this.getAttribute("value") + ".mp3");
    document.getElementById("song").play();
    console.log('playing ' + this.getAttribute("value"));
})