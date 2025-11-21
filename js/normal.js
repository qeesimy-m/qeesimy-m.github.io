/* 帧率显示 */
/* ---------- start ---------- */
document.addEventListener('pjax:complete', fps);
document.addEventListener('DOMContentLoaded', fps);
function fps(){
if(window.localStorage.getItem("fpson")=="1"){
var rAF = function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();
var frame = 0;
var allFrameCount = 0;
var lastTime = Date.now();
var lastFameTime = Date.now();
var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);
 
    lastFameTime = now;
    // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
    allFrameCount++;
    frame++;
 
    if (now > 1000 + lastTime) {
        var fps = Math.round((frame * 1000) / (now - lastTime));
        if(fps<=6){
            var kd=`<span style="color:#bd0000">卡成ppt</span>`
        }
        else if(fps<=10){
            var kd=`<span style="color:red">电竞级帧率</span>`
        }
        else if(fps<=14){
            var kd=`<span style="color:yellow">难受</span>`
        }
        else if(fps<24){
            var kd=`<span style="color:orange">卡</span>`
        }
        else if(fps<=40){
            var kd=`<span style="color:green">...</span>`
        }
        else{
            var kd=`<span style="color:#425aef">正常</span>`
        }
        document.getElementById("fps").innerHTML=`FPS:${fps} ${kd}`;
        frame = 0;
        lastTime = now;
    };
 
    rAF(loop);
}

loop();
}
else{$("#fps").hide()}}
/* ---------- end ---------- */


/* 网页控制台 */
/* ---------- start ---------- */
var now1 = new Date();

function createtime1() {
    var grt = new Date("07/14/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到香芋冰淇淋!`,
        `站长请你吃根冰淇淋捏~`,
        `
        
#######  ######## ########  ######  #### ##     ## ##    ## 
##     ## ##       ##       ##    ##  ##  ###   ###  ##  ##  
##     ## ##       ##       ##        ##  #### ####   ####   
##     ## ######   ######    ######   ##  ## ### ##    ##    
##  ## ## ##       ##             ##  ##  ##     ##    ##    
##    ##  ##       ##       ##    ##  ##  ##     ##    ##    
 ##### ## ######## ########  ######  #### ##     ##    ##   
                                              
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By Qeesimy",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by Qeesimy %c 你正在访问香芋冰淇淋",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };
/* ---------- end ---------- */


/* Aplayer 默认关闭歌词 */
/* ---------- start ---------- */
function removelrc() {
    // 检测是否存在歌词按钮
    const lrcIcon = document.querySelector(".aplayer-icon-lrc");
    if (!lrcIcon) {
      return;
    }
  
    // 触发以后立刻移除监听
    observer.disconnect();
  
    // 稍作延时保证触发函数时存在按钮
    setTimeout(() => {
      // 以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
      lrcIcon.click();
    }, 1);
  
    console.log("success");
  }
  
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        removelrc();
      }
    }
  });
  
  const observerConfig = {
    childList: true, // 观察子节点的变化
    subtree: true, // 观察所有后代节点的变化
  };
  
  observer.observe(document, observerConfig); // 开始观察document节点的变化
/* ---------- end ---------- */


/* 新年侧边栏 */
/* ---------- start ---------- */
function newYear() {
    if (!document.querySelector('#newYear')) return;
    // 新年时间戳 and 星期对象
    let SpringFestival = new Date('2024-02-10 00:00:00')
    let newYear = SpringFestival.getTime() / 1000,
      week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }
    function nol(h) { h = Number(h); return h > 9 ? h : '0' + h; }
    time();
  
    function time() {
      // 现在 时间对象
      let now = new Date();
  
      // 右下角 今天
      document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]
  
      // 现在与新年相差秒数
      let second = newYear - Math.round(now.getTime() / 1000);
  
      // 小于0则表示已经过年
      if (second < 0) {
        window.newYearTimer = null
        document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
        document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</span>';
      } else {
        // 大于0则还未过年
        document.querySelector('#newYear .title').innerHTML = '距离' + SpringFestival.getFullYear() + '年春节：'
        // 大于一天则直接渲染天数
        if (second > 86400) {
          document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}</span><span class="unit">天</span>`
        } else {
          // 小于一天则使用时分秒计时。
          let h = nol(parseInt(second / 3600));
          second %= 3600;
          let m = nol(parseInt(second / 60));
          second %= 60;
          let s = nol(second);
          document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
          // 计时
          if (!window.newYearTimer) window.newYearTimer = setInterval(time, 1000);
        }
      }
    }
  }
  
  function newYearSwiper() {
    var swiper = new Swiper('.newYear-slider', {
      passiveListeners: true,
      loop: true,
      // autoplay: false,
      autoplay: {
        disableOnInteraction: true,
        delay: 5000
      },
      effect: 'fade',
      mousewheel: true,
      autoHeight: true
    });
  
    var comtainer = document.querySelector('.newYear-slider');
    if (comtainer !== null) {
      comtainer.onmouseenter = () => { swiper.autoplay.stop() };
      comtainer.onmouseleave = () => { swiper.autoplay.start() };
    }
  }
  
  // 适配了pjax
  function whenDOMReady() {
    // pjax加载完成（切换页面）后需要执行的函数和代码
    newYear()
    newYearSwiper()
  }
  
  whenDOMReady() // 打开网站先执行一次
  document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次
/* ---------- end ---------- */


/*  */
/* ---------- start ---------- */

/* ---------- end ---------- */

/*  */
/* ---------- start ---------- */

/* ---------- end ---------- */