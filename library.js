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
  console.log(this.tracks.length);
}
// Playlist.prototype.overallDuration

const myLibrary = new Library("Sweet toonz", "Dood");

myLibrary.addPlaylist(new Playlist("woo"));

console.log(myLibrary);
