// ---------- 设置页面主体加载 ---------- //
document.addEventListener("DOMContentLoaded", function() {
  setShowMain();
  tosetting();
});

function setShow(id) {
  $("#setting-show").hide();
  $("#backer").show();
  $(id).show();
}

function setShowMain() {
  $(".asetting").hide();
  $("#setting-show").show();
  $("#backer").hide();
}

function tosetting() {
  $("#settingWindow").hide();
}

function toggleWinbox() {
  $("#settingWindow").fadeToggle();
  if (document.getElementById("settingWindow").style.display != "none") {
    document.getElementById("settingWindow").style.display = "flex";
  }
};
// ---------- 初始化设置 ---------- //
// 打开小窗时候初始化
if (localStorage.getItem("universe") == "block") {
  document.getElementById("universeSet").checked = true;
} else if (localStorage.getItem("universe") == "none") {
  document.getElementById("universeSet").checked = false;
}
if (localStorage.getItem("fpson") == "1") {
  document.getElementById("fpson").checked = true;
} else {
  document.getElementById("fpson").checked = false;
}
if (localStorage.getItem("light") == "true") {
  document.getElementById("lightSet").checked = true;
} else {
  document.getElementById("lightSet").checked = false;
}

// ---------- 背景设置 ---------- //
// 存数据
// name：命名 data：数据
saveData = function (name, data) {
  localStorage.setItem(name, JSON.stringify({ time: Date.now(), data: data }));
};

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
loadData = function (name, time) {
  let d = JSON.parse(localStorage.getItem(name));
  // 过期或有错误返回 0 否则返回数据
  if (d) {
    let t = Date.now() - d.time;
    if (t < time * 60 * 1000 && t > -1) return d.data;
  }
  return 0;
};
// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
changeBg = function (s, flag) {
  let bg = document.getElementById("web_bg");
  if (s.charAt(0) == "#") {
    bg.style.backgroundColor = s;
    bg.style.backgroundImage = "none";
  } else bg.style.backgroundImage = s;
  if (!flag) {
    saveData("blogbg", s);
  }
};
// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
  let data = loadData("blogbg", 1440);
  if (data) changeBg(data, 1);
  else localStorage.removeItem("blogbg");
} catch (error) {
  localStorage.removeItem("blogbg");
}

// ---------- 字体设置 ---------- //
setFont = function (n) {
  localStorage.setItem("font", n);
  if (n == "main") {
    var s = document.querySelectorAll(
      "body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer"
    );
    for (var i = 0; i < s.length; i++) {
      s[i].style.fontFamily =
        "-apple-system, IBM Plex Mono ,monospace,'微软雅黑', sans-serif";
    }
  } else if (n == "HYPailou") {
    var s = document.querySelectorAll(
      "body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer"
    );
    for (var i = 0; i < s.length; i++) {
      s[i].style.fontFamily =
        "Fredoka,HYPailou,KyoukashoProL,-apple-system, IBM Plex Mono ,monospace,'微软雅黑', sans-serif";
    }
  } else {
    var s = document.querySelectorAll(
      "body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer"
    );
    for (var i = 0; i < s.length; i++) {
      s[i].style.fontFamily =
        'var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,"微软雅黑", sans-serif';
    }
    document.body.style.fontFamily =
      "var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif";
    document.documentElement.style.setProperty("--global-font", n);
  }
};

// 网页默认字体
if (localStorage.getItem("font") == undefined) {
  localStorage.setItem("font", "SerifSC"); // 修改第二个引号里的字体
}

setFont(localStorage.getItem("font"));

// ---------- 主题设置 ---------- //
// 定义主题名称数组
const themes = ["simplicity", "artistic"];

// 获取主题内容的函数
function getThemeContent(themeName) {
  return fetch(`/css/theme/${themeName}.css`)
    .then((response) => response.text())
    .catch((error) => console.error("Error:", error));
}

// 根据给定的主题名称更新CSS样式表的函数
function setTheme(themeName) {
  getThemeContent(themeName)
    .then((themeContent) => {
      const themeLink = document.getElementById("theme");
      themeLink.href = `/css/theme/${themeName}.css`;
    })
    .catch((error) => console.error("Error:", error));
}

// 初始化默认主题
setTheme(simplicity);

// ---------- 系统设置 ---------- //
// 清除localStorage配置项
function clearItem() {
  localStorage.removeItem('blogbg');
  localStorage.removeItem('universe');
  localStorage.removeItem('blur');
  localStorage.removeItem('fpson');
  localStorage.removeItem('transNum');
  localStorage.removeItem('bing');
  localStorage.removeItem('blurRad');
  localStorage.removeItem('font');
  localStorage.removeItem('themeColor');
  localStorage.removeItem('rs');
  localStorage.removeItem('mouse');
}

// 恢复默认设置并刷新
function reset() {
  clearItem();
  reload();
}

// 全屏
fullScreen = function () {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
};

// 侧边栏切换
toggleAside = function () {
  const $htmlDom = document.documentElement.classList;
  $htmlDom.contains("hide-aside")
    ? saveToLocal.set("aside-status", "show", 2)
    : saveToLocal.set("aside-status", "hide", 2);
  $htmlDom.toggle("hide-aside");
};

// ---------- 特效开关 ---------- //
// Aplayer开关
function setAplayer() {
  const hideAplayer = document.getElementById("hideAplayer");
  const aplayer = document.querySelector('.aplayer');

  hideAplayer.addEventListener('change', function() {
    aplayer.style.display = hideAplayer.checked ? "block" : "none";
  });

  aplayer.style.display = hideAplayer.defaultChecked ? "block" : "none";
}

// 樱花特效开关
window.onload = function() {
  var input = document.getElementById('hideSakura');
  input.addEventListener('change', function() {
    if (input.checked) {
      document.getElementById('canvas_sakura').style.display = 'block';
    } else {
      document.getElementById('canvas_sakura').style.display = 'none';
    }
  });
  
  if (input.checked) {
    document.getElementById('canvas_sakura').style.display = 'block';
  } else {
    document.getElementById('canvas_sakura').style.display = 'none';
  }
};

// 星空背景特效开关
if (localStorage.getItem("universe") == undefined) {
  localStorage.setItem("universe", "block");
}

setUniverse2(localStorage.getItem("universe"));
function setUniverse2(c) {
  document.getElementById("universe").style.display = c;
  localStorage.setItem("universe", c);
}

function setUniverse() {
  if (document.getElementById("universeSet").checked) {
    setUniverse2("block");
  } else {
    setUniverse2("none");
  }
}

// 雪花开关
function setSnow() {
  const snowSet = document.getElementById("snowSet");
  const snow = document.getElementById("snow");

  snowSet.addEventListener('change', function() {
    snow.style.display = snowSet.checked ? "block" : "none";
  });

  snow.style.display = snowSet.checked ? "block" : "none";
}

// FPS开关
if (localStorage.getItem("fpson") == undefined) {
  localStorage.setItem("fpson", "1");
}

function fpssw() {
  if (document.getElementById("fpson").checked) {
    document.getElementById("fps").style.display = "block";
    localStorage.setItem("fpson", "1");
  } else {
    document.getElementById("fps").style.display = "none";
    localStorage.setItem("fpson", "0");
  }
}