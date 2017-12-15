
var timer = null;
window.onload = function () {

    var oDiv = document.getElementById("box_2");
    var oImg = oDiv.getElementsByTagName('img');	// 获取图片

    var oBtn = document.getElementById('btn');
    var oSpan = oBtn.getElementsByTagName('span');	// 获取按钮

    var iNum = 0;	// 建立索引值
    function fadeOut (obj) {
        var value = 100;	// 设置初始透明度
        clearInterval(obj.timer);	// 清除该对象对应的定时器

        obj.timer = setInterval(function () {
            var speed = -5;	// 设置速度
            if ( value == 0 ) {
                clearInterval(obj.timer);
            }else {
                value += speed;
                obj.style.opacity = value/100;
                obj.style.filter = "alpha(opacity:" + value + ")";
            }
        }, 30);
    }

    function fadeIn (obj) {
        var value = 0;	// 设置初始透明度
        clearInterval(obj.timer);	// 清除该对象对应的定时器

        obj.timer = setInterval(function () {
            var speed = 5;	// 设置速度
            if ( value == 100 ) {
                clearInterval(obj.timer);
            }else {
                value += speed;
                obj.style.opacity = value/100;
                obj.style.filter = "alpha(opacity:" + value + ")";
            }
        }, 30);
    }

    var buttons = function () {		// 设置按钮
        for (var i = 0;i< oSpan.length; i++) {
            if (oSpan[i].className == 'moveon'){
                oSpan[i].className = '';
                break;
            }
        }
        oSpan[iNum].className = 'moveon';
    }

    function auto () {
        fadeOut(oImg[iNum]);	// 淡出 当前 img
        if ( iNum == oImg.length-1 ){
            iNum = 0;
        } else {
            iNum++;
        }
        fadeIn(oImg[iNum]);		// 淡入 当前+1 img
        buttons();
    }

    // click 事件
    for (var i = 0; i < oSpan.length; i++) {
        oSpan[i].index = i;
        oSpan[i].onmouseover = function () {
            if( this.className == 'moveon') {
                return ;
            }
            fadeOut(oImg[iNum]);	// 淡出原来没有点击按钮时的图片
            fadeIn(oImg[this.index]);	// 淡入点击的img
            iNum = this.index;		// 当前索引值变成点击后的span对应的索引值
            buttons();
        }
    }


    // onmouseover & onmouseout

    oDiv.onmouseover = function () {
        clearInterval(timer);
    }
    oDiv.onmouseout = function () {
        timer = setInterval(auto, 3000);
    }

    var timer = setInterval(auto, 3000);

}
//微信和新浪
$(function(){
    $(".weixin").mouseover(function(){
     $(this).css("color","green");
     $(".wei").css("backgroundPosition", "-96px 0");
     $("#wechat").slideDown("fast");

    })
    $(".weixin").mouseout(function(){
        $(this).css("color","");
        $(".wei").css("backgroundPosition", "");
        $("#wechat").css("display","none");
    })
    $(".sina").mouseover(function(){
        $(this).css("color","red");
        $(".sina-in").css("backgroundPosition", "-32px 0");
    })
    $(".sina").mouseout(function(){
        $(this).css("color","");
        $(".sina-in").css("backgroundPosition", "");
    })
})
