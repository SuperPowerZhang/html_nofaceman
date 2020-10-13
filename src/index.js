import text from './text'
let hack = document.getElementById("hack");
let style = document.getElementById("style");
let html = document.querySelector("html");
console.log(style.innerHTML);


let length = text.length;
let i = 0;
//flag用来标志style的内容是否接受修改
let flag = false;
let turn = true;
let text2 = "";
let speed = 30
let step = (time) => {
    console.log(time);

    if (turn) {
        const timer = setTimeout(function () {
            if (i < length) {
                // if (text[i] === " ") {
                //     console.log("检测到空格了");
                //     text2 += "&nbsp;";
                // } else {
                text2 += text[i];
                // }
                //当上一个文字是@时，flag改为true，开始写样式；
                text[i - 1] === "@" ? flag = true : null;
                //判断flag为true时，看是否修改style
                flag ? style.innerHTML += text[i] : null;
                //当下一个文字是&时，flag改为false，停止写样式；
                text[i + 1] === "&" ? flag = false : null;
                hack.innerText = text2;
                i += 1;
                //好像只写一个window也可以的
                window.scrollTo({
                    top: 9999,
                    left: 0,
                    behavior: 'smooth'
                });
                html.scrollTo({
                    top: 9999,
                    left: 0,
                    behavior: 'smooth'
                });
                step(time);
            }
        }, time)
    }
}
step(speed);
let handLeft = document.querySelector(".handLeft")
let handRight = document.querySelector(".handRight")

handLeft.addEventListener('touchstart', (e) => {
    if (e.target === handLeft) {
        console.log("确实监听到了左手的触摸事件");
        handLeft.animate([
            {
                transform: 'rotate(0deg)',
                // offset: 0, // 第 0 关键帧，0 和 1 可以省略不写
            },
            {
                transform: 'rotate(23deg)',
                offset: 0.33, // 指的就是 33% 关键帧
            },
            {
                transform: 'rotate(45deg)',
                offset: 0.66, // 指的就是 66% 关键帧
            },
            {
                transform: 'rotate(0deg)',
                // offset: 1, // 第 100% 关键帧，0 和 1 可以省略不写

            }], {
            // timing options
            duration: 500,
            iterations: 1//默认值就是1，可以指定小数
        })
        console.log('确实成功');

    }

})
handRight.addEventListener('touchstart', (e) => {
    if (e.target === handRight) {
        console.log("确实监听到了右手的触摸事件");
        handRight.animate([
            {
                transform: 'rotate(0deg)',
                // offset: 0, // 第 0 关键帧，0 和 1 可以省略不写
            },
            {
                transform: 'rotate(23deg)',
                offset: 0.33, // 指的就是 33% 关键帧
            },
            {
                transform: 'rotate(45deg)',
                offset: 0.66, // 指的就是 66% 关键帧
            },
            {
                transform: 'rotate(0deg)',
                // offset: 1, // 第 100% 关键帧，0 和 1 可以省略不写

            }], {
            // timing options
            duration: 500,
            iterations: 1//默认值就是1，可以指定小数
        })
        console.log('呦呦呦确实成功');

    }

})
$(".off").on('click', () => {
    turn = false
});
$(".on").on('click', () => {
    turn = true
    step(300)
});
$(".fast").on('click', () => {
    turn = false
    speed = 30
    turn = true
    step(speed)
    console.log(10);

});
$(".normal").on('click', () => {
    turn = false
    speed = 300
    turn = true
    step(speed)
    step(300)
    console.log(300);

});
$(".slow").on('click', () => {
    turn = false
    speed = 600
    turn = true
    step(speed)
    step(600)
    console.log(600);
});