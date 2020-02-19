
$("#add").click(function(){

var playlist = [
    {
        name: "The Hero",
        length: 1.30,
        artist: "JAM Project",
        songlink: "https://www.youtube.com/watch?v=atxYe-nOa9w&t=26s",
        imagelink: "https://i.ytimg.com/vi/atxYe-nOa9w/maxresdefault.jpg",
    },
    {
        name: "Golden Wind",
        length: 4.53,
        artist: "Hirohiko Araki",
        songlink: "https://www.youtube.com/watch?v=2MtOpB5LlUA",
        imagelink: "https://vignette.wikia.nocookie.net/jjba/images/f/f8/Overture.png/revision/latest?cb=20181217024652",
    },
    {
        name: "Clattanoia",
        length: 1.29,
        artist: "OxT",
        songlink: "https://www.youtube.com/watch?v=KOWcj7XKnfQ",
        imagelink: "https://i1.sndcdn.com/artworks-000136539716-raqs3f-t500x500.jpg",
    }

]

playlist.forEach(function(song){

$("#form").push

$("#cart").append("<p>" + song["name"] + " " + song["length"] + " " + song[ "imagelink"] + "</p>");

`<p>${song["name"]} ${song["length"]} ${song["imagelink"]} </p>`

});

});