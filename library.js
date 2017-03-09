//==== Constructors ====
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, duration) {
  this.title = title;
  this.rating = rating;
  this.duration = duration;
}

//==== Prototype methods ====
//Library
Library.prototype.addTrack = function (track) {
  this.tracks.push(track);
};

Library.prototype.addPlaylist = function (playlist) {
  this.playlists.push(playlist);
};

//Playlist
Playlist.prototype.addTrackToPlaylist = function (track) {
  this.tracks.push(track);
};

Playlist.prototype.overallRating = function () {
  return ((this.tracks.reduce((acc, track) => { return acc + track.rating; }, 0)) / this.tracks.length);
};


Playlist.prototype.overallDuration = function () {
  return (this.tracks.reduce((acc, track) => { return acc + track.duration; }, 0));
};

//Run functions

const myLibrary = new Library("CWK's Library", "CWK");
const epic = new Playlist("Sofa king epic playlist");
const SpaceJam = new Track("Space Jam Theme", 5, 360);

myLibrary.addPlaylist();
epic.addTrackToPlaylist(SpaceJam);
console.log(epic.overallRating());
console.log(epic.overallDuration());
