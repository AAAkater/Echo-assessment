// 在这里写 JS
let begin = document.querySelector(".begin");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let ms = document.querySelector(".ms");

minute.innerHTML = "00";
second.innerHTML = "00";
ms.innerHTML = "00";

var minute_ = 0;
var second_ = 0;
var ms_ = 0;

let time = null;

begin.onclick = function () {
  clearInterval(time);
  time = setInterval(() => {
    if (ms_ === 59) {
      second_++;
      ms_ = 0;
    }
    if (second_ === 59) {
      minute_++;
      second_ = 0;
    }
    ms_++;
    if (minute_ === 60) {
      clearInterval(time);
      minute_ = 0;
      second_ = 0;
      ms_ = 0;
    }
    minute.innerHTML = `${minute_}`.padStart(2, 0);
    second.innerHTML = `${second_}`.padStart(2, 0);
    ms.innerHTML = `${ms_}`.padStart(2, 0);
  }, 15);
};

stop.onclick = function () {
  clearInterval(time);
  time = null;
};

reset.onclick = function () {
  clearInterval(time);
  minute_ = 0;
  second_ = 0;
  ms_ = 0;

  minute.innerHTML = `${minute_}`.padStart(2, 0);
  second.innerHTML = `${second_}`.padStart(2, 0);
  ms.innerHTML = `${ms_}`.padStart(2, 0);
  clearInterval(time);
  time = setInterval(() => {
    if (ms_ === 59) {
      second_++;
      ms_ = 0;
    }
    if (second_ === 59) {
      minute_++;
      second_ = 0;
    }
    ms_++;
    if (minute_ === 60) {
      clearInterval(time);
      minute_ = 0;
      second_ = 0;
      ms_ = 0;
    }
    minute.innerHTML = `${minute_}`.padStart(2, 0);
    second.innerHTML = `${second_}`.padStart(2, 0);
    ms.innerHTML = `${ms_}`.padStart(2, 0);
  }, 10);
};
