// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//文字可以直接写，但是css代码段规定好@开始，到&结束；
var string = "\n\u5927\u5BB6\u597D\uFF0C\u4ECA\u5929\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u6765\u81EA\u5BAB\u5D0E\u9A8F\u7684\u52A8\u6F2B\u4E16\u754C\u7684\u65E0\u8138\u7537\u3002\n\n\u9996\u5148\u7ED9\u6587\u5B57\u52A0\u4E2A\u6837\u5F0F\uFF0C\u80CC\u666F\u52A0\u4E2A\u989C\u8272\uFF1A\n@body{\n    font-size:16px;\n    color:#7093DB;\n    line-height:24px;\n    background-color: rgb(158, 102, 101);\n    position: relative;\n    padding:20px;\n}&\n\n\u4E0B\u9762\u7ED9\u65E0\u8138\u7537\u753B\u4E00\u4E2A\u5C0F\u7A97\u53E3\uFF1A\n@.main .window {\n  position: absolute;\n  top: 0;\n  left: 25px;\n  width: 250px;\n  height: 250px;\n  border-radius: 125px;\n  background-color: #fff;\n  overflow: hidden;\n}&\n\n\u63A5\u4E0B\u6765\u753B\u4E00\u4E2A\u5706\u4F5C\u4E3A\u5934\n@.main .window .man .head {\n  position: absolute;\n  left: 75px;\n  top: 40px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  background-color: #000;\n  z-index: 1;\n  /* box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5); */\n}&\n\n\u63A5\u4E0B\u6765\u753B\u4ED6\u7684\u8EAB\u5B50\uFF1A\n@.main .window .man .body {\n  margin-top: -84px;\n  width: 140px;\n  height: 1000px;\n  border-radius: 80px/350px;\n  background-color: #000;\n}&\n\n\u597D\u4E86\uFF0C\u8BE5\u753B\u8138\u4E86\n@.main .window .man .face {\n  position: absolute;\n  left: 85px;\n  top: 60px;\n  width: 80px;\n  height: 110px;\n  background-color: #fff;\n  z-index: 2;\n  border-radius: 40px/55px;\n}&\n\n\u8FD9\u4E2A\u9634\u5F71\u4E0D\u77E5\u9053\u5B66\u540D\u53EB\u5565\u5462\n@\n.main .window .man .face .tear {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -30px;\n  margin-top: -40px;\n  width: 60px;\n  height: 70px;\n  background-color: rgb(244, 125, 126);\n  border-radius: 30px/35px;\n}\n.main .window .man .face .tear::before {\n    content: \"\";\n    display: block;\n    width: 70px;\n    height: 30px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -18px);\n    background-color: #fff;\n    border-radius: 20px/4px;\n}\n\n.main .window .man .face .tear::after {\n    content: \"\";\n    display: block;\n    width: 32px;\n    height: 72px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    border-radius: 5px/15px;\n}&\n\n\u753B\u4E24\u4E2A\u773C\u775B\uFF1A\n@.main .window .man .face .eye {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: -7px;\n  width: 14px;\n  height: 14px;\n  background-color: #000;\n  border-radius: 7px;\n}\n\n.main .window .man .face .eye.left {\n  margin-left: 20px;\n}\n\n.main .window .man .face .eye.right {\n  margin-left: -20px;\n}&\n\n\u662F\u80FD\u5403\u4EBA\u7684\u5927\u5634\u5DF4\n@\n.main .window .man .face .mouth {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: 40px;\n  width: 20px;\n  height: 8px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.main .window .man .face .mouthLeft,\n.mouthRight {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 2px;\n  background-color: #000;\n  top: 93px;\n}\n\n.main .window .man .face .mouthLeft {\n  margin-left: -8px;\n}\n\n.main .window .man .face .mouthRight {\n  margin-left: 8px;\n}\n\n.main .window .man .face .mouth::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid #000;\n  border-radius: 20px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -100%);\n  margin-top: 2px;\n}&\n\n\u52A0\u4E0A\u4E24\u53EA\u5C0F\u624B\uFF1A\n@\n.main .hand {\n  width: 250px;\n  height: 250px;\n}\n\n.main .handLeft,\n.handRight {\n  position: absolute;\n  top: 230px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #000;\n  width: 26px;\n  height: 36px;\n  border-radius: 13px/18px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  z-index: 3;\n  transform-origin: 50% 0%;\n}\n\n.main .handLeft {\n  margin-left: -50px;\n  transform: rotate(15deg);\n}\n\n.main .handRight {\n  margin-left: 24px;\n  transform: rotate(-15deg);\n}\n&\n\n\u4E0B\u9762\u8BF7\u6478\u6478\u5B83\u7684\u5C0F\u624B\u5427\uFF0C\u4F1A\u6709\u60CA\u559C\u5965\uFF01\uFF01\uFF01\n";
var _default = string;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hack = document.getElementById("hack");
var style = document.getElementById("style");
var html = document.querySelector("html");
console.log(style.innerHTML);
var length = _text.default.length;
var i = 0; //flag用来标志style的内容是否接受修改

var flag = false;
var turn = true;
var text2 = "";
var speed = 30;

var step = function step(time) {
  console.log(time);

  if (turn) {
    var timer = setTimeout(function () {
      if (i < length) {
        // if (text[i] === " ") {
        //     console.log("检测到空格了");
        //     text2 += "&nbsp;";
        // } else {
        text2 += _text.default[i]; // }
        //当上一个文字是@时，flag改为true，开始写样式；

        _text.default[i - 1] === "@" ? flag = true : null; //判断flag为true时，看是否修改style

        flag ? style.innerHTML += _text.default[i] : null; //当下一个文字是&时，flag改为false，停止写样式；

        _text.default[i + 1] === "&" ? flag = false : null;
        hack.innerText = text2;
        i += 1; //好像只写一个window也可以的

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
    }, time);
  }
};

step(speed);
var handLeft = document.querySelector(".handLeft");
var handRight = document.querySelector(".handRight");
handLeft.addEventListener('touchstart', function (e) {
  if (e.target === handLeft) {
    console.log("确实监听到了左手的触摸事件");
    handLeft.animate([{
      transform: 'rotate(0deg)' // offset: 0, // 第 0 关键帧，0 和 1 可以省略不写

    }, {
      transform: 'rotate(23deg)',
      offset: 0.33 // 指的就是 33% 关键帧

    }, {
      transform: 'rotate(45deg)',
      offset: 0.66 // 指的就是 66% 关键帧

    }, {
      transform: 'rotate(0deg)' // offset: 1, // 第 100% 关键帧，0 和 1 可以省略不写

    }], {
      // timing options
      duration: 500,
      iterations: 1 //默认值就是1，可以指定小数

    });
    console.log('确实成功');
  }
});
handRight.addEventListener('touchstart', function (e) {
  if (e.target === handRight) {
    console.log("确实监听到了右手的触摸事件");
    handRight.animate([{
      transform: 'rotate(0deg)' // offset: 0, // 第 0 关键帧，0 和 1 可以省略不写

    }, {
      transform: 'rotate(23deg)',
      offset: 0.33 // 指的就是 33% 关键帧

    }, {
      transform: 'rotate(45deg)',
      offset: 0.66 // 指的就是 66% 关键帧

    }, {
      transform: 'rotate(0deg)' // offset: 1, // 第 100% 关键帧，0 和 1 可以省略不写

    }], {
      // timing options
      duration: 500,
      iterations: 1 //默认值就是1，可以指定小数

    });
    console.log('呦呦呦确实成功');
  }
});
$(".off").on('click', function () {
  turn = false;
});
$(".on").on('click', function () {
  turn = true;
  step(300);
});
$(".fast").on('click', function () {
  turn = false;
  speed = 30;
  turn = true;
  step(speed);
  console.log(10);
});
$(".normal").on('click', function () {
  turn = false;
  speed = 300;
  turn = true;
  step(speed);
  step(300);
  console.log(300);
});
$(".slow").on('click', function () {
  turn = false;
  speed = 600;
  turn = true;
  step(speed);
  step(600);
  console.log(600);
});
},{"./text":"text.js"}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56643" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map