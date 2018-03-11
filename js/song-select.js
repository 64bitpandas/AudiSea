$(".song-select").click(function() {
    $("#song").attr("src", "./songs/" + this.getAttribute("value") + ".mp3")
})