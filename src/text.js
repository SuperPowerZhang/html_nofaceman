//文字可以直接写，但是css代码段规定好@开始，到&结束；

const string = `
大家好，今天给大家画一个来自宫崎骏的动漫世界的无脸男。

首先给文字加个样式，背景加个颜色：
@body{
    font-size:16px;
    color:#7093DB;
    line-height:24px;
    background-color: rgb(158, 102, 101);
    position: relative;
    padding:20px;
}&

下面给无脸男画一个小窗口：
@.main .window {
  position: absolute;
  top: 0;
  left: 25px;
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: #fff;
  overflow: hidden;
}&

接下来画一个圆作为头
@.main .window .man .head {
  position: absolute;
  left: 75px;
  top: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #000;
  z-index: 1;
  /* box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5); */
}&

接下来画他的身子：
@.main .window .man .body {
  margin-top: -84px;
  width: 140px;
  height: 1000px;
  border-radius: 80px/350px;
  background-color: #000;
}&

好了，该画脸了
@.main .window .man .face {
  position: absolute;
  left: 85px;
  top: 60px;
  width: 80px;
  height: 110px;
  background-color: #fff;
  z-index: 2;
  border-radius: 40px/55px;
}&

这个阴影不知道学名叫啥呢
@
.main .window .man .face .tear {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -40px;
  width: 60px;
  height: 70px;
  background-color: rgb(244, 125, 126);
  border-radius: 30px/35px;
}
.main .window .man .face .tear::before,.tear::after {
    display: block;
    content:'';
}&

画两个眼睛：
@.main .window .man .face .eye {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: -7px;
  width: 14px;
  height: 14px;
  background-color: #000;
  border-radius: 7px;
}

.main .window .man .face .eye.left {
  margin-left: 20px;
}

.main .window .man .face .eye.right {
  margin-left: -20px;
}&

是能吃人的大嘴巴
@
.main .window .man .face .mouth {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 40px;
  width: 20px;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.main .window .man .face .mouthLeft,
.mouthRight {
  position: absolute;
  width: 4px;
  height: 4px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background-color: #000;
  top: 93px;
}

.main .window .man .face .mouthLeft {
  margin-left: -8px;
}

.main .window .man .face .mouthRight {
  margin-left: 8px;
}

.main .window .man .face .mouth::before {
  content: "";
  display: block;
}&

加上两只小手：
@
.main .hand {
  width: 250px;
  height: 250px;
}

.main .handLeft,
.handRight {
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  width: 26px;
  height: 36px;
  border-radius: 13px/18px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  z-index: 3;
  transform-origin: 50% 0%;
}

.main .handLeft {
  margin-left: -50px;
  transform: rotate(15deg);
}

.main .handRight {
  margin-left: 24px;
  transform: rotate(-15deg);
}
&

下面请摸摸它的小手吧，会有惊喜奥！！！
`
export default string;