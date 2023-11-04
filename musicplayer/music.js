const audioPlayer = document.getElementById("musicPlayer");
const previousButton = document.getElementById("previousButton");
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const songNameElement = document.getElementsByClassName("songName");

const audio = [
    "music/deva.mp3" ,
    "music/Besabriyaan.mp3",
    "music/Neele Neele Ambar.mp3",
    "music/Challa Jab.mp3",
    "music/Tu Mileya.mp3",
    "music/Khairiyat song.mp3",
    "music/Obsessed1.mp3",
    "music/Everything At.mp3",
    "music/Raanjhanaa Song.mp3",
    "music/Waalian - Harnoor.mp3",
]

let currentTrackIndex = 0;

/* function playSong(songFileName) {
    if (currentSong !== songFileName) {
        audioPlayer.pause();
        mp3Source.src = songFileName;
        oggSource.src = songFileName.replace('.mp3', '.ogg');
        audioPlayer.load();
        audioPlayer.play();
        currentSong = songFileName;
    } else {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
} */

function updateNowPlaying(){
    if(!audioPlayer.paused){
        const songName = audioPlayer.currentSrc.split('/').pop();
        songNameElement.textContent = `Now Playing : ${songName}`;
    }
}

audioPlayer.addEventListener('play',updateNowPlaying);
audioPlayer.addEventListener('pause',updateNowPlaying);

function playCurrentTrack (){
    audioPlayer.src = audio[currentTrackIndex]
    audioPlayer.play();
}

function playNextTrack (){
    currentTrackIndex = (currentTrackIndex + 1) % audio.length;
    playCurrentTrack();
}


function playPreviousTrack (){
    currentTrackIndex = (currentTrackIndex - 1) % audio.length;
    playCurrentTrack();
}

function handleNextTrackAutoPlay(){
    audioPlayer.addEventListener('ended',()=>{
        playNextTrack();
    })
}

handleNextTrackAutoPlay();

playButton.addEventListener('click',()=>{
    if(audioPlayer.paused){
        playCurrentTrack();
    }
    else{
        audioPlayer.pause();
    }
});

nextButton.addEventListener('click',()=>{
        playNextTrack();
});

previousButton.addEventListener('click',()=>{
    playPreviousTrack();
});

//playCurrentTrack();