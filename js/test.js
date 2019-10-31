// var testFolder = "C:\\Users\\KYD\\Documents\\GitHub\\momentum-clone\\audio";
// var fs = require("fs");

// music_list = [];

// fs.readdir(testFolder, function(error, filelist) {
//   music_list = filelist[0];
// });

// console.log(music_list);

// selectRandom(); // Select initial song
// player.play(); // Start Song

// var lastSong = null;
// var selection = null;
// var playlist = ["audio/boy with luv.mp3"]; // List of Songs

// var player = document.getElementById("audioplayer"); // Get Audio Element
// player.volume = 0.5;
// player.autoplay = true;
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
