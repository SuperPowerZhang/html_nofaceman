import text from './text'
let hack = document.getElementById("hack");
let style = document.getElementById("style");
let html = document.querySelector("html");

let length = text.length;
let i = 0;
//flag用来标志style的内容是否接受修改
let flag = false;
let turn = true;
let text2 = "";
let speed = 30

let step = () => {
    console.log(speed);
    //每次执行step都声明了一个定时器，那需要清除一个它，再开始一个新的
    if (turn) {
        setTimeout(function () {
            if (i < length) {
                text2 += text[i];
                text[i - 1] === "@" ? flag = true : null;
                flag ? style.innerHTML += text[i] : null;
                text[i + 1] === "&" ? flag = false : null;
                hack.innerText = text2;
                i += 1;
                window.scrollTo({
                    top: 9999,
                    left: 0,
                    behavior: 'smooth'
                });
                step(speed);
            }
        }, speed)
    }
}
step(speed);

$(".off").on('click', () => {
    turn = false
});
$(".on").on('click', () => {
    turn = true
    //如果我点很多次on的话，会生成多个step，怎么清除之前的呢
    step(speed)
});
$(".fast").on('click', () => {

    speed = 30

});
$(".normal").on('click', () => {
    speed = 300
});
$(".slow").on('click', () => {
    speed = 600
});

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
