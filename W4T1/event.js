var Eventdic = {};
const e = {
  subscribe: function (evenname, evenfun) {
    if (!(evenname in Eventdic)) {
      Eventdic[evenname] = [evenfun];
    } else {
      Eventdic[evenname].push(evenfun);
    }
    return function () {
      var pos = Eventdic[evenname].indexOf(evenfun);
      Eventdic[evenname].splice(pos, 1);
    };
  },
  dispatch: function (evenname) {
    for (let fun in Eventdic[evenname]) {
      Eventdic[evenname][fun]();
    }
  },
  clear: function (evenname) {
    delete Eventdic[evenname];
  },
};

const unsubscribe1 = e.subscribe("event1", () => console.log(1));
e.subscribe("event1", () => console.log(2));
e.subscribe("event2", () => console.log(3));

e.dispatch("event1"); // 输出 1、2
e.dispatch("event2"); // 输出3

unsubscribe1(); // 取消一个事件订阅

e.dispatch("event1"); // 输出 2
e.dispatch("event2"); // 输出 3

e.clear("event2"); // 清空事件下所有订阅

e.dispatch("event1"); // 输出 2
e.dispatch("event2"); // 无输出
