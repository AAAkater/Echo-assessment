const inputEl = document.querySelector("input");
const submitEl = document.querySelector("button");
const listEl = document.querySelector(".list");
refreshData();
submitEl.addEventListener("click", async function () {
  let value = inputEl.value;
  inputEl.value = "";
  if (value.trim() == "") {
    alert("请输入内容");
    return;
  }
  await addComment(value);
  await refreshData();
});
function addComment(value) {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:2333/comment", {
      method: "POST",
      body: JSON.stringify({
        content: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["msg"] === "ok") {
          alert("添加评论成功");
          resolve();
        } else {
          reject();
        }
      })
      .catch((error) => {
        alert.error("添加评论失败:", error);
      });
  });
}
function refreshData() {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:2333/comments", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //清除原有的评论
        while (listEl.hasChildNodes()) {
          listEl.removeChild(listEl.firstChild);
        }
        //获取所有评论
        data["payload"].forEach((element) => {
          let content = element["content"];
          let id = element["id"];
          let li = document.createElement("li");
          li.innerHTML = `<div class="content">${content}</div><div class="op">X</div>`;
          li.querySelector(".op").addEventListener("click", async () => {
            li.parentNode.removeChild(li);
            await delComment(id);
          });
          listEl.appendChild(li);
        });
      });
  });
}

function delComment(index) {
  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1:2333/comment/${index}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["msg"] === "ok") {
          alert("删除评论成功");
        }
      })
      .catch((error) => {
        alert("删除评论失败:", error);
      });
  });
}
