var items = document.querySelectorAll('.item')
var tempItem

function getItemNum() {
    var randomNum = Math.floor(Math.random() * 9)
    return randomNum
}

function getColorNum() {
    return '#' +
        (function (color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                (color.length == 6) ? color : arguments.callee(color);
        })('');
}

function setBColor() {
    var changeItem = []
    if (tempItem){
        for (let i in tempItem) {
            tempItem[i].style.backgroundColor = 'orange'
        }
    }
    for (let i = 0; i < 3; i++) {
        var tempNum = getItemNum()
        changeItem.push(items[tempNum])
    }

    for (let i in changeItem) {
        changeItem[i].style.backgroundColor = getColorNum()
    }
    tempItem = changeItem
  
}
window.onload = function () {
    var colorGo
    var startBtn = document.querySelector('#start')
    var stopBtn = document.querySelector('#stop')

    startBtn.onclick = function () {
        colorGo = setInterval(setBColor, 600)
    }
    stopBtn.onclick = function () {
        clearInterval(colorGo)
        for (let i in tempItem) {
            tempItem[i].style.backgroundColor = 'orange'
        }
    }
}