// const fs = require("fs");

// var lastSong = null;
// var selection = null;
// var folder = "C:\\Users\\KYD\\Documents\\GitHub\\momentum-clone\\audio";

// var musiclist = [];

// var files = fs.readdirSync(folder);

// files.forEach(file => {
//   let fileStat = fs.statSync(folder + "/" + file).isDirectory();
//   if (!fileStat) {
//     musiclist.push(file);
//   }
// });

// var playlist = ["audio/" + `${musiclist[0]}`]; // List of Songs

// // console.log(playlist);

// var lastSong = null;
// var selection = null;

// // var playlist = ["audio/boy with luv.mp3"];

// var player = document.getElementById("audioplayer"); // Get Audio Element
// player.autoplay = true;
// player.src = "audio/boy with luv.mp3";
// player.addEventListener("ended", selectRandom); // Run function when song ends

// function selectRandom() {
//   while (selection == lastSong) {
//     // Repeat until different song is selected
//     selection = Math.floor(Math.random() * playlist.length);
//   }
//   lastSong = selection; // Remember last song
//   player.src = playlist[selection]; // Tell HTML the location of the new Song
// }

// selectRandom(); // Select initial song
// player.play(); // Start Song
