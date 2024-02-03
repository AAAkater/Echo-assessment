# 文件管理系统测试用后端

这个是测试用的后端程序，**如果你不想自己写后端 / 找合作，可以使用这个程序**。当然也可以自己写后端 / 找合作~

请解压后运行 `file-explorer-backend.exe`，所有的数据默认储存到 `./data` 下，`./data` 下已有一些测试文件，请随意增删

程序默认监听 `127.0.0.1:2333`

有问题请联系 QQ：369060891

**注意**：所有的请求都需要带有 URL 参数 `key` 用作简易鉴权，默认值为 `epoch`

## 列出文件

```
GET /:path?action=list&key=epoch
```

| URL 参数 | 说明                          |
| -------- | ----------------------------- |
| path     | 需要列出的路径，使用 URI 编码 |

### 示例请求

```
GET /?action=list&key=epoch
```

```json
{
    "payload": [
        {
            "name": "img.jpg",
            "path": "img.jpg",
            "isFolder": false
        },
        {
            "name": "test1",
            "path": "test1",
            "isFolder": true
        },
        {
            "name": "test2",
            "path": "test2",
            "isFolder": true
        }
    ],
    "err": "",
    "msg": ""
}
```

## 删除文件

```
GET /:path?action=del&key=epoch
```

| URL 参数 | 说明                          |
| -------- | ----------------------------- |
| path     | 需要删除的路径，使用 URI 编码 |

### 示例请求

```
GET /img.jpg?action=del&key=epoch
```

```json
{
    "payload": null,
    "err": "",
    "msg": "ok"
}
```

## 重命名文件

```
GET /:path?action=rename&key=epoch
```

| URL 参数 | 说明                                  |
| -------- | ------------------------------------- |
| path     | 需要重命名的文件的路径，使用 URI 编码 |
| new      | 新文件名                              |

### 示例请求

```
GET /img.jpg?action=rename&new=img1.jpg&key=epoch
```

```json
{
    "payload": null,
    "err": "",
    "msg": "ok"
}
```

## 下载文件

```
GET /:path?action=get&key=epoch
```

| URL 参数 | 说明                                |
| -------- | ----------------------------------- |
| path     | 需要下载的文件的路径，使用 URI 编码 |

### 示例请求

```
GET /img1.jpg?action=get&key=epoch
```

```
<指定文件的二进制数据>
```

## 获取文件信息（修改时间）

```
GET /:path?action=info&key=epoch
```

| URL 参数 | 说明                                    |
| -------- | --------------------------------------- |
| path     | 需要获取信息的文件的路径，使用 URI 编码 |

### 示例请求 

```
GET /img.jpg?action=info&key=epoch
```

```json
{
    "payload": {
        "modTime": "2022-09-25 13:09:00"
    },
    "err": "",
    "msg": ""
}
```

## 创建文件夹

```
GET /:path?action=newFolder&key=epoch
```

| URL 参数 | 说明                                |
| -------- | ----------------------------------- |
| path     | 需要创建文件夹的路径，使用 URI 编码 |
| name     | 文件夹名                            |

### 示例请求

```
GET /?action=newFolder&name=123&key=epoch
```

```json
{
    "payload": null,
    "err": "",
    "msg": "ok"
}
```

## 上传文件

```
POST /:path?action=upload&key=epoch
```

| URL 参数 | 说明                            |
| -------- | ------------------------------- |
| path     | 需要上传到的目录，使用 URI 编码 |

| Form Data 参数 | 说明           |
| -------------- | -------------- |
| file           | 需要上传的文件 |

### 示例请求

```
POST /?action=upload&key=epoch
```

```json
{
    "payload": null,
    "err": "",
    "msg": "ok"
}
```

