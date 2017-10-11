
function playFn() {
    if (myplayer.myvalue === "1") {
        myaudio.play()
        this.myvalue = '0'
    } else {
        myaudio.pause()
        this.myvalue = '1'
    }
}
var myaudio = document.querySelector('#myaudio')
var myplayer = document.querySelector('.player')
myplayer.myvalue = '1'
myplayer.addEventListener('click', playFn, false)

/* 显示操作按钮 */
var mylists = document.querySelector('body')
var myicons = document.querySelectorAll('.operation')
var iconbes = null
var icon_cache = null
mylists.addEventListener('mouseover', function (e) {
    var target = e.target
    var myclass = target.className
    if (myclass === 'identity') {
        icon_cache = iconbes
        iconbes = target.nextElementSibling
        iconbes.style.visibility = 'visible'
    }
    if (iconbes && myclass !== 'identity' && myclass !== 'operation') {
        if (iconbes.style.visibility) {
            iconbes.style.visibility = 'hidden'
        }
    }
    e.preventDefault;
    e.stopPropagation;
}, false)

//解决移动端不能检测mouseover的问题，用click代替
mylists.addEventListener('click', function (e) {
    var target = e.target
    var myclass = target.className
    if (myclass === 'identity') {
        if(icon_cache && iconbes != icon_cache){
            icon_cache.style.visibility = 'hidden'
        }
    }

    e.preventDefault
    e.stopPropagation
}, false)

var myclose = document.querySelector('.myclose')
var myturn = document.querySelector('.over-turn')
myclose.addEventListener('click', function(){
    myturn.style.display = 'none'
}, false)



