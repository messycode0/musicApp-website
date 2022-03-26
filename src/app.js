console.log("started")

/*
var audio = new Audio('audio_file.mp3');
audio.play();

THIS IS THE WORST CODE I HAVE EVER WRITTEN, im sorry
*/

/*
//      todo: make the play/pause button one that toggles between play and pause
//      todo: turn the seconds into MM:SS
        todo: make faster/slower buttons
        todo: make a loop button
        todo: make a random/shuffle button
        todo: make a volume slider
        todo: make a mute button
*/

isPlayingSound = false

const songs = {
    "song1": {
        "location": "audio/getLucky.mp3",
        "name": "Get Lucky",
        "artist": "Daft Punk",
        "year": 2013,
        "genre": "Electronic",
        "duration": "4:08",
        "cover": "https://www.clashmusic.com/sites/default/files/field/image/get_lucky_daft_punk_by_rothdog-d62aa4m.jpg"
    }
}
/* HERE WE WILL RANDOMIZE THE SONG, BUT FOR NOW, ITS GET LUCKY */
var SoundAudio = new Audio(songs.song1.location);

var img = new Image().src = songs.song1.cover

// make the image fit the screen size


// img.onload = function(){
//     // nothing for now
// }



document.getElementById("cover").src = img
var currentMusicTime = "0:00"

function updateHTML(elmId, value) {
    var elem = document.getElementById(elmId);
    if(typeof elem !== 'undefined' && elem !== null) {
      elem.innerHTML = value;
    }
    else{
        console.log("element not found")
    }
}


function playStopButtonFunction(){
    if(isPlayingSound){
        pauseSound()
        updateHTML("playStop", "|>")
    }
    else{
        playSound()
        updateHTML("playStop", "||")
    }
}

function loopSound(){
    if(isPlayingSound){
        SoundAudio.loop = true
        updateHTML("loopBtn", "O")
    }
    else{
        SoundAudio.loop = false
        updateHTML("loopBtn", "o")
    }
}

function stopSound(){
    isPlayingSound = false
    SoundAudio.pause()
    SoundAudio.currentTime = 0
}
function pauseSound(){
    isPlayingSound = false
    SoundAudio.pause()
}

function playSound(){
    console.log(isPlayingSound)
    if(isPlayingSound){
        return
    }
    isPlayingSound = true
    currentMusicTime = "0:00"
    
    SoundAudio.play();
    SoundAudio.onended = function(){
        isPlayingSound = false
        updateHTML("playStop", "|>")
    }
}

musicPlayerTimeCurrent.innerHTML = SoundAudio.currentTime
setInterval(function(){
    
    currentMusicTime = "" + Math.floor(SoundAudio.currentTime / 60) + ":" + (Math.floor(SoundAudio.currentTime % 60)) + "/" + Math.floor(SoundAudio.duration / 60) + ":" + (Math.floor(SoundAudio.duration % 60))

    console.log(SoundAudio.currentTime + " " + SoundAudio.duration)     
    updateHTML('musicPlayerTimeCurrent', currentMusicTime)              
    updateHTML('musicPlayerTimeTotal', "duration : " + songs.song1.duration)            
    //songs.song1.duration
},500)


