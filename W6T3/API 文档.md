# API 文档

请 **解压后** 运行同目录下的 `simple-comment.exe`，在开发测试时请不要关闭黑窗

## 创建评论

- **URL:** `http://127.0.0.1:2333/comment`

- **方法:** POST

- **请求体:**

  ```json
  {
    "content": "评论内容"
  }
  ```

- **样例响应:**

  ```json
  {
    "payload": null,
    "msg": "ok"
  }
  ```

## 删除评论

- **URL:** `http://127.0.0.1:2333/comment/<要删除的评论 ID>`

- **方法:** DELETE

- **样例响应:**

  ```json
  {
    "payload": null,
    "msg": "ok"
  }
  ```

## 获取所有评论

- **URL:** `http://127.0.0.1:2333/comments`

- **方法:** GET

- **样例响应:**

  ```json
  {
    "payload": [
      {
        "id": 1,
        "content": "comment1"
      },
      {
        "id": 2,
        "content": "comment2"
      }
    ],
    "msg": "ok"
  }
  ```
