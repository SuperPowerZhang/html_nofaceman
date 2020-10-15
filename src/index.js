import text from './text'
import $ from './jquery'

let hack = document.getElementById("hack");
let style = document.getElementById("style");
let html = document.querySelector("html");
let length = text.length;
console.log(length);

let i = 0;
//flag用来标志style的内容是否接受修改
let flag = false;
let turn = true;
let text2 = "";
let timer = undefined
let speed = 100

const player = {
    step: () => {
        player.bind()
        if (timer) {
            window.clearTimeout(timer)
        }
        //每次执行step都声明了一个定时器，那需要清除一个它，再开始一个新的
        if (turn) {
            timer = setTimeout(function () {
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
                    player.step(speed);
                }
            }, speed)
        }
    },
    events: {
        ".off": "off",
        ".on": "on",
        ".fast": "fast",
        ".norma": "normal",
        ".slow": "slow"
    },
    on: () => {
        turn = true
        player.step(speed)
    },
    off: () => {
        turn = false
    },
    fast: () => {

        speed = 30
    },
    normal: () => {
        speed = 100

    },
    slow: () => {

        speed = 500
    },
    bind: () => {
        for (let k in player.events) {
            $(`${k}`).on('click', player[player.events[k]]);
            $(`${k}`).on('touchstart', player[player.events[k]]);

        }
    }

}
player.step(speed);



let handLeft = document.querySelector(".handLeft")
let handRight = document.querySelector(".handRight")

handLeft.addEventListener('touchstart', (e) => {
    if (e.target === handLeft) {
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
            iteration: 1
            // iterations: 1
        })

    }

})
handRight.addEventListener('touchstart', (e) => {
    if (e.target === handRight) {
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
            iteration: 1
        })
    }
})
