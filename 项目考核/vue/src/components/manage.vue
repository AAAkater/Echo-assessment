<script setup>
import { onMounted, ref } from "vue";
const files = ref([]);
const currentPath = ref("");

onMounted(() => {
  Getflies("");
});

//返回上一级
const GoBack = (path) => {
  const parentFolder = path.substring(0, path.lastIndexOf("/"));
  Getflies(parentFolder);
};

//列出文件
const Getflies = (path) => {
  if (path === undefined || path === null) {
    path = "";
  }
  currentPath.value = path; //更新当前路径
  fetch(`http://127.0.0.1:2333/${path}/?action=list&key=epoch`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      files.value = [];
      let id = 1;
      data.payload.forEach((file) => {
        GetFlieInfo(file.path).then((info) => {
          files.value.push({
            id: id++,
            info: info,
            name: file.name,
            path: file.path,
            isFolder: file.isFolder,
          });
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
//删除文件
const DelFile = (path) => {
  fetch(`http://127.0.0.1:2333/${path}?action=del&key=epoch`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        console.log(`删除${path}成功`);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      Getflies(currentPath.value);
    });
};

//重命名文件
const RenameFile = (file) => {
  fetch(
    `http://127.0.0.1:2333/${file.path}?action=rename&new=${file.name}&key=epoch`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      Getflies(currentPath.value);
    });
};

//下载文件
const DownLoadFile = (file) => {
  const URl = `http://127.0.0.1:2333/${file.path}?action=get&key=epoch`;

  fetch(URl, { method: "GET" })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      link.click();

      // 清理临时链接
      window.URL.revokeObjectURL(url);
    });
};

//获取文件信息
const GetFlieInfo = async (path) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:2333/${path}?action=info&key=epoch`
    );
    if (response.ok) {
      const data = await response.json();
      return data.payload.modTime;
    }
  } catch (error) {
    console.error(error);
  }
};

//创建文件夹
const CreateNewFolders = () => {
  //重名处理
  let NewFolderName = `新建文件夹`;
  const regex = /^(.*?)(\(\d+\))?$/;
  let cnt = 0;
  for (let file of files.value) {
    if (file.isFolder) {
      const Match = file.name.match(regex);
      if (Match && Match[1] === NewFolderName) {
        cnt++;
      } else if (file.name === NewFolderName) {
        cnt++;
      }
    }
  }
  if (cnt) {
    NewFolderName = `新建文件夹(${cnt})`;
  }
  fetch(
    `http://127.0.0.1:2333/${currentPath.value}/?action=newFolder&name=${NewFolderName}&key=epoch`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      Getflies(currentPath.value);
    });
};

//上传文件
const AddNewFile = (event) => {
  let selectedFile = event.target.files[0];
  if (selectedFile === null) return;
  //重名处理
  let FileName = selectedFile.name;
  const regex = /^(.*?)(\(\d+\))(\.[^.]+)$/;
  let fileExt = FileName.substring(FileName.lastIndexOf(".")); // 获取文件后缀
  let baseName = FileName.substring(0, FileName.lastIndexOf(".")); // 获取文件名（不含后缀）
  let cnt = 0;
  for (let file of files.value) {
    if (file.isFolder) {
      continue;
    }
    const Match = file.name.match(regex);
    if (Match && Match[1] === baseName && Match[3] === fileExt) {
      cnt++;
    } else if (FileName === file.name) {
      cnt++;
    }
  }
  if (cnt) {
    FileName = `${baseName}(${cnt})${fileExt}`;
  }

  const formdata = new FormData();
  formdata.append("file", selectedFile, FileName);
  fetch(`http://127.0.0.1:2333/${currentPath.value}?action=upload&key=epoch`, {
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      Getflies(currentPath.value);
    });
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <div class="avatar">
          <img src="../assets/头像.jpg" alt="" />
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <ul class="buttons">
            <li>
              <button @click="GoBack(currentPath)">
                <el-icon><Back /></el-icon>返回上一级
              </button>
            </li>
            <li>
              <button @click="CreateNewFolders(currentPath)">
                <el-icon><Folder /></el-icon>
                创建新文件夹
              </button>
            </li>
            <li>
              <!-- <el-icon><Upload /></el-icon> -->
              <input class="AddFile" type="file" @change="AddNewFile" />
            </li>
          </ul>
        </el-header>
        <el-main class="main">
          <ul class="ColumnName">
            <li>序号</li>
            <li>名称</li>
            <li>信息</li>
            <li>操作</li>
          </ul>
          <ul class="FilesList">
            <li v-for="file in files" :key="file.id">
              {{ file.id }}
              <input
                class="FileName"
                v-model="file.name"
                @keyup.enter="RenameFile(file)"
              />
              {{ file.info }}

              <div class="ButtonsArea">
                <button v-if="file.isFolder" @click="Getflies(file.path)">
                  打开
                </button>
                <button v-if="!file.isFolder" @click="DownLoadFile(file)">
                  <el-icon><Download /></el-icon>
                </button>
                <button @click="DelFile(file.path)">
                  <el-icon><Delete /></el-icon>
                </button>
              </div>
            </li>
          </ul>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
* {
  caret-color: transparent;
}
/* 总界面 */
.common-layout {
  background-color: white;
  width: 1000px;
  height: 600px;

  border-radius: 20px;
}

ul {
  padding: 0;
  list-style: none;
}
/* 菜单 */
.header {
  width: auto;
  height: 20%;
  display: flex;
  align-items: center;

  padding: 0;
}
/* 菜单选项 */
.buttons {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons li {
  height: 50px;
  margin: 0 20px 0 20px;
  display: flex;
}
.buttons li button {
  border: none;
  background-color: powderblue;
  font-size: 20px;
  border-radius: 20px;
}
.buttons li button:hover {
  background-color: red;
}
.buttons li button:active {
  background-color: green;
}

/* 添加按钮 */
.buttons li:last-child {
  display: flex;
  align-items: center;
  /* outline: auto red; */
  width: auto;
  height: 100px;
}
/* .AddFile{
  font-size: 20px;
  
}

.AddFile::after{
  content: '';
} */
/* 文件列名 */
.ColumnName {
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr;

  font-size: 25px;
  margin-top: 0px;
}
.ColumnName li:last-child {
  text-align: end;
  width: 200px;
}
/* 文件 */
.FilesList {
  height: 380px;
  overflow-y: auto;
}

.FilesList li {
  margin: 10px 0 10px 0;
  height: 40px;

  display: grid;
  grid-template-columns: 40px auto auto 1fr;
  background-color: aquamarine;

  text-align: center;
  align-items: center;
}
.FilesList li:hover {
  background-color: gray;
}
.FileName {
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  caret-color: auto;

  background-color: transparent;
  margin-left: 20px;
  font-size: 20px;
}

/* 文件按钮区域 */
.ButtonsArea {
  /* outline: auto red; */
  display: flex;
  height: 30px;
  width: 280px;
  justify-content: end;
}

/* 左边头像 */
.aside {
  width: 200px;
  height: 600px;
}
.avatar {
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
}
aside img {
  width: 80%;
  height: auto;
  border-radius: 20px;
}
</style>
