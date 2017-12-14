var hand = document.getElementById("hand")
var banner2 = document.getElementById("banner2");
var banner_h3 = document.getElementById("banner_h3");
var banner_p = document.getElementById("banner_p");
var navBar = document.getElementById("navBar");
var time = document.getElementById("time")
var xia = document.getElementById("xia")
var img = document.getElementById("img")
var txt2_h3 = document.getElementById("txt2_h3");
var txt2_p = document.getElementById("txt2_p");
var txt1 = document.getElementById("txt1");
var heart = document.getElementById("heart")
var left = document.getElementById("left");
var right = document.getElementById("right");
var blue_heart = document.getElementById("blue_heart");
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var heart_txt = document.getElementById("heart_txt");
var heart_p = document.getElementById("heart_p");
var p0 = document.getElementById("p0");
var shouDong = document.getElementById("shouDng");
var p1 = document.getElementById("p1");
var jingTai = document.getElementById("jingTai");
var p2 = document.getElementById("p2");
var dongTai = document.getElementById("dongTai");
var p3 = document.getElementById("p3");


var slide = document.getElementById("slide");
var ul = slide.children[0];
var slide_h3 = document.getElementById("slide_h3");
var slide_p = document.getElementById("slide_p");
var water_h3 = document.getElementById("water_h3");
var water_p = document.getElementById("water_p");
var map_h3 = document.getElementById("map_h3");
var map_p = document.getElementById("map_p");
var timer = null;
var watchFlag = true;
window.onscroll = function () {
    if (scroll().top > 855) {
        animate(banner_h3, {"top": -63, "opacity": 1}, function () {
            animate(banner_p, {"top": 45, "opacity": 1})
        })
        setTimeout(function () {
            animate(xia, {"opacity": 0})
        }, 3)
    }
    if (scroll().top > 1342) {
        animate(txt2_h3, {"top": 10, "opacity": 1}, function () {
            animate(txt2_p, {"top": 105, "opacity": 1})
        });
    }
    if (scroll().top > 1500) {
        animate(icon1, {"left": 20}, function () {
            animate(icon2, {"left": 464}, function () {
                animate(icon3, {"left": 500})
            })
        });
    }

    //手表栏
    if (scroll().top > 2340) {
        if (watchFlag) {
            watchFlag = false;

            animate(heart_txt, {"top": 44, "opacity": 1}, function () {
                animate(p0, {"top": 80, "opacity": 1}, function () {
                    animate(shouDong, {"top": 250, "opacity": 1}, function () {
                        animate(p1, {"top": 290, "opacity": 1}, function () {
                            animate(jingTai, {"top": 330, "opacity": 1}, function () {
                                animate(p2, {"top": 370, "opacity": 1}, function () {
                                    animate(dongTai, {"top": 410, "opacity": 1}, function () {
                                        animate(p3, {"top": 450, "opacity": 1}, function () {


                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            animate(left, {"left": 60, "top": 381});
            console.log("执行了");
            var i = -20;
            clearInterval(timer);
            timer = setInterval(function () {
                i++;
                right.style.transform = "rotate(" + i + "deg)";
                if (i >= 0) {
                    clearInterval(timer);
                }
            }, 50);

            animate(right, {"left": 193, "opacity": 1})
            animate(blue_heart, {"opacity": 1})
        }

    }


    if (scroll().top > 3090) {
        animate(slide_h3, {"top": -77, "opacity": 1}, function () {
            animate(slide_p, {"top": 43, "opacity": 1})
        });
    }
    if (scroll().top > 3704) {
        animate(water_h3, {"top": -163, "opacity": 1}, function () {
            animate(water_p, {"top": -75, "opacity": 1})
        });
    }
    if (scroll().top > 4304) {
        animate(map_h3, {"top": 10, "opacity": 1}, function () {
            animate(map_p, {"top": 80, "opacity": 1})
        });
    }
    //导航栏悬停
    if (scroll().top > navBar.offsetTop) {
        navBar.className = "fixed"
        navBar.style.transition = "1s";
    } else {
        navBar.className = "navBar";
    }


}
//轮播图
window.onload = function () {

    var oDiv = document.getElementById('slide');
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
        oSpan[i].onclick = function () {
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

    /*oDiv.onmouseover = function () {
        clearInterval(timer);
    }
    oDiv.onmouseout = function () {
        timer = setInterval(auto, 3000);
    }*/

    var timer = setInterval(auto, 3000);

}







/*window.onload = function () {
    var timer = null;
    var slide = document.getElementById("slide");
    var oImg = slide.getElementsByTagName("img");	// 获取图片

    var oBtn = document.getElementById("btn");
    var oSpan = oBtn.getElementsByTagName("span");	// 获取按钮

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
        oSpan[iNum].className = "moveon";
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
    /*for (var i = 0; i < oSpan.length; i++) {
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
*/


    /*var timer = setInterval(auto, 1000);

}*/


//所有属性都到达目标值之后才能清理定时器
//封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
function animate(obj, json, fn) {//json {属性名:属性值} {attr:target}
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / 300;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 1000 / 60);
}


function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}