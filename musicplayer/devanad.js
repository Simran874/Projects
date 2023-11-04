const audioPlayer = document.getElementById("musicPlayer");
const previousButton = document.getElementById("previousButton");
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const songNameElement = document.getElementsByClassName("songName");

const audio = [
    "music/Abhi.mp3",
    "music/kanchi.mp3",
    "music/Aasman.mp3",
]

let currentTrackIndex = 0;

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