var items = document.querySelectorAll('.item')
var tempItem = []
var randomArr = []

function getColorNum() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
}

function getRandomNum() {
    var num = Math.floor(Math.random() * 9)
    if (randomArr.indexOf(num) === -1) {
        randomArr.push(num)
        if (randomArr.length === 3) {
            randomArr = []
        }
		console.log(num)
        return num
    }
    return getRandomNum()
}

function setBColor() {
    if (tempItem) {
        for (let i in tempItem) {
            tempItem[i].style.backgroundColor = 'orange'
        }
    }
    for (let i = 0; i < 3; i++) {
        let index = getRandomNum()
        items[index].style.backgroundColor = getColorNum()
        tempItem.push(items[index])
    }
}

var startBtn = document.querySelector('#start')
var stopBtn = document.querySelector('#stop')
var colorGo

startBtn.onclick = function () {
    if (colorGo) {
        return
    }
    colorGo = setInterval(setBColor, 600)
}

stopBtn.onclick = function () {
    clearInterval(colorGo)
    for (let i in tempItem) {
        tempItem[i].style.backgroundColor = 'orange'
    }
    colorGo = null
}