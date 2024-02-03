const sakaban = {
  eat: function Eat() {
    console.log("进食成功！");
  },
};

function decorator(eat) {
  return function () {
    var end = new Date().getTime();
    if((start-end)%5==0){
        const result = eat.apply(this, arguments);
        return result;
    }
    console.log("进食失败！5秒内只允许进食一次");
  };
}

const newEat = decorator(sakaban.eat);

var start = new Date().getTime();
newEat();
newEat();
newEat();
newEat();
newEat();
