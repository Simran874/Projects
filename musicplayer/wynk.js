const audioElement = document.getElementById("musicPlayer")
const previousButton = document.getElementById("previousButton");
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");

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


handleNextTrackAutoPlay();


/* let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('song'));

let audio = [
    {songName: "Deva Deva" , filepath : "music/deva.mp3" , coverpath: "images/deva.webp" },
    {songName: "Besarbriyan" , filepath : "music/Besabriyaan.mp3" , coverpath: "images/besabriyan.webp" },
    {songName: "Neele Neele Ambar Par (Kishore Kumar)" , filepath : "music/Neele Neele Ambar.mp3" , coverpath: "images/neele.webp" },
    {songName: "Obsessed" , filepath : "music/Obsessed1.mp3" , coverpath: "images/obessesd.webp" },
    {songName: "Everything at Once" , filepath : "music/Everything At.mp3" , coverpath: "images/everything.webp" },
    {songName: "Tu Mileya" , filepath : "music/Tu Mileya.mp3" , coverpath: "images/tumileya.webp" },
    {songName: "Raanjhana" , filepath : "music/Raanjhanaa Song.mp3" , coverpath: "images/ranjhaana.webp" },
    {songName: "Wallian" , filepath : "music/Waalian - Harnoor.mp3" , coverpath: "images/wallian.webp" },
    {songName: "Khairiyat" , filepath : "music/Khairiyat song.mp3" , coverpath: "images/khairiyat.webp" },
    {songName: "Challa" , filepath : "music/Challa Jab.mp3" , coverpath: "images/challa.webp" }
]

songItem.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacitiy = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacitiy = 0;
    }
})
  
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

let makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =  ` ${songindex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex +=1;
    }
    audioElement.src =  (` ${songindex + 1}.mp3`);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex -=1;
    }
    audioElement.src =  (` ${songindex + 1}.mp3`);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}) */

//playCurrentTrack();