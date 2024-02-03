// 在这里写 JS

var utxt = document.getElementById("utxt");
var txt = document.getElementById("commentinput");
var head1 = document.getElementById("head1");
function mysubmit() {
  if (txt.value === "" || txt.value.match(/^[ ]*$/)) {
    alert("请输入内容");
    txt.value = "";
  } else {
    var comments = document.createElement("li");
    comments.className = "comments";
    comments.innerHTML = '<div class="content">' + `${txt.value}` + "</div>";

    utxt.appendChild(comments);
    txt.value = "";
  }

  var del = document.createElement("button");
  del.className = "delete";
  del.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">\
  <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"\
    fill="currentColor"></path>\
</svg>';
  comments.appendChild(del);
  del.onclick = function () {
    del.parentNode.remove();
  };
}

function morecomments() {
  var lis = utxt.getElementsByTagName("li");
  if (lis.length > 4) {
    head1.style.height = 265 + (lis.length - 4) * 35 + "px";
  }
}

function tt() {
  setInterval(morecomments, 100);
}
tt();
