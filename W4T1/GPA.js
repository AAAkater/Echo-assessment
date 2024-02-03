function fn(obj) {
  var output = {
    gpas: [],
    failed: {},
  };
  var tmp = {};
  for (let courses in obj) {
    for (let num in obj[courses]) {
      var student = obj[courses][num]["name"];
      if (tmp.hasOwnProperty(student)) {
        tmp[student]["all"] += obj[courses][num]["score"];
        tmp[student]["cnt"]++;
      } else {
        tmp[student] = { all: obj[courses][num]["score"], cnt: 1 };
      }

      if (obj[courses][num]["score"] < 60) {
        var failedname = obj[courses][num]["name"];
        if (failedname in output["failed"]) {
          output["failed"][failedname].push(courses);
        } else output["failed"][failedname] = [courses];
      }
    }
  }
  for (let studentname in tmp) {
    output["gpas"].push({
      name: studentname,
      gpa:
        Math.round(
          ((1.0 * tmp[studentname]["all"]) / tmp[studentname]["cnt"] - 50) * 10
        ) / 100,
    });
  }
  console.log(tmp);
  return output;
}

const input = {
  course1: [
    { name: "小E", score: 80 },
    { name: "小p", score: 70 },
  ],
  course2: [{ name: "小p", score: 50 }],
};

var output = fn(input);
console.log(output);
