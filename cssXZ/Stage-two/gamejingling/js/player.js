

function playFn() {
    if (player.value == "1") {
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
var player = document.querySelector('.player')
myaudio.addEventListener('click', playFn, false)
myaudio.myvalue = '1'