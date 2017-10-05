
function playFn() {
    if (myplayer.value == "1") {
        console.log(this.myvalue)
        audio.play()
        this.myvalue = '0'
    } else {
        console.log(this.myvalue)
        audio.pause()
        this.myvalue = '1'
    }
}
var myaudio = document.querySelector('audio')
var myplayer = document.querySelector('.player')
myplayer.addEventListener('click', playFn, false)
myaudio.myvalue = '1'