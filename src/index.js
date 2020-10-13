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
            iterations: Infinity
        })
        console.log('确实成功');

    }

})
