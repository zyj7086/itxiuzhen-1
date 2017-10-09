var initMenu = (function () {
    var header
    var menuList
    var menuListHeight
    var headerHeight

    //是否点击菜单按钮，初始值为false
    var isClick = false
    //获取元素
    function getMyEle(ele) {
        return document.querySelector(`${ele}`)
    }
    //菜单列表开始移动
    function moveMenu(ele, dis) {
        ele = getMyEle(ele)
        var moveTempDis = 0
        var goSpeed = setInterval(function () {
            moveTempDis += 2
            ele.style.transform = `translate3d(0px, ${moveTempDis}px, 0px)`
            if (moveTempDis >= dis) {
                moveTempDis = dis
                ele.style.transform = `translate3d(0px, ${moveTempDis}px, 0px)`
                clearInterval(goSpeed)
            }
            if(dis === 0) {
                menuList.style.zIndex = -999
            }
        }, 1)
    }
    //检测屏幕宽度
    function checkClientWidth() {
        var bodyHeight = document.body.clientHeight
        if (bodyHeight >= 789) {
            closeMyMenu()
        }
        if(bodyHeight <= 790) {
            wait()
        }
    }
    //打开菜单
    function openMyMenu() {
        isClick = true
        moveMenu('#menu-list', headerHeight)
        moveMenu('main', menuListHeight)
        moveMenu('footer', menuListHeight)
        setTimeout(function(){
            menuList.style.zIndex = 999
        },600)
        console.log(isClick)
    }
    //关闭菜单
    function closeMyMenu() {
        if (getMyEle('#menu-list')) {
            moveMenu('#menu-list', headerHeight)
        }
        moveMenu('#menu-list', 0)
        moveMenu('main', 0)
        moveMenu('footer', 0)
        isClick = false
        console.log(isClick)
    }
    //监听点击事件
    function clickMyMenuBtn() {
        var myMenuBtn = document.querySelector('#myMBtn')
        myMenuBtn.addEventListener('click', function () {
            if (!isClick) {
                openMyMenu()
            } else {
                closeMyMenu()
            }
        }, false)
    }
    function wait() {
        header = document.querySelector('header')
        menuList = getMyEle('#menu-list')
        menuListHeight = menuList.clientHeight
        headerHeight = header.clientHeight
        clickMyMenuBtn()
    }
    wait()
    return {
        checkClientWidth: checkClientWidth
    }
})()
window.onload = initMenu

//当浏览器宽度大于790px时，就不再需要下拉列表菜单
//监听浏览器宽度的改变
window.onresize = initMenu.checkClientWidth

