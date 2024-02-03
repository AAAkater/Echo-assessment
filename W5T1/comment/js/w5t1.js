const inputEl = document.querySelector("input");
const submitEl = document.querySelector("button");
const listEl = document.querySelector(".list");

submitEl.addEventListener("click", function () {
  let value = inputEl.value;
  if (value.trim() == "") {
    alert("请输入内容");
    inputEl.value = "";
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<div class="content">${value}</div><div class="op">X</div>`;
  listEl.appendChild(li);
  setDelMethod();
  inputEl.value = "";
});

const setDelMethod = () => {
  const ops = document.querySelectorAll(".op");
  for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
  }
};
