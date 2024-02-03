# Flex & Media Query 小合集

Flex 是一个重要的特性，它的出现使原本困难（例如垂直居中）的布局变得简单。使用 Flex 组织网页内容会省事很多

Media Query 可以让你为不同的屏幕大小定义不同的样式，实现移动端适配

这个题集一共包含 3 道小题，帮助你检验自己对 Flex & Media Query 知识的掌握程度

## 骰子 `dice.html`

按照同名示例图片，使用 Flex 布局来实现骰子的 6 个面

请不要改动 HTML 结构，也许你可以点击 [这里](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type) 了解 `:nth-of-type` 伪类选择器

## 导航栏 `navbar.html`

使用 Flex & Media Query 来实现导航栏

断点为：`(max-width: 640px)`，大于呈现桌面端导航栏，小于则呈现移动端导航栏

桌面端导航栏最大宽度为 1200px，高度 80 px，圆角半径 5px

右侧有头像显示，头像图片地址为：`https://nullptr.zone/avatars/transparent/256x256.png`，这个头像是透明的，记得加上白色背景

以下是用到的 SVG 标签：

```html
<!-- 叉图标 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
>
  <path
    d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
    fill="currentColor"
  ></path>
</svg>

<!-- 首页图标 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
>
  <path
    d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z"
    fill="currentColor"
  ></path>
</svg>

<!-- 精选图标 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
>
  <path
    d="M16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1L16 6.52M16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48z"
    fill="currentColor"
  ></path>
</svg>

<!-- 画廊图标 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
>
  <path
    d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6z"
    fill="currentColor"
  ></path>
  <path
    d="M26 4h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6z"
    fill="currentColor"
  ></path>
  <path
    d="M12 18H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6z"
    fill="currentColor"
  ></path>
  <path
    d="M26 18h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"
    fill="currentColor"
  ></path>
</svg>

<!-- 合集图标 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
>
  <path d="M4 22H2V4a2.002 2.002 0 0 1 2-2h18v2H4z" fill="currentColor"></path>
  <path
    d="M21 17a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3zm0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1z"
    fill="currentColor"
  ></path>
  <path
    d="M28 7H9a2.002 2.002 0 0 0-2 2v19a2.002 2.002 0 0 0 2 2h19a2.002 2.002 0 0 0 2-2V9a2.002 2.002 0 0 0-2-2zm0 21H9v-6l4-3.997l5.586 5.586a2 2 0 0 0 2.828 0L23 22.003L28 27zm0-3.828l-3.586-3.586a2 2 0 0 0-2.828 0L20 22.172l-5.586-5.586a2 2 0 0 0-2.828 0L9 19.172V9h19z"
    fill="currentColor"
  ></path>
</svg>
```

更加具体的样式可以参照同名示例视频

## 专辑 `album.html`

实现一个专辑购买卡片

专辑封面图为：`https://cd-1253266055.cos.ap-guangzhou.myqcloud.com/arcd-0054/cover.jpg`

以下是文字，供复制粘贴：

```
IGNITION DANCEHALL
Alstroemeria Records
立即购买 加入购物车 收藏
Ignition Masayoshi Minoshima
Beautiful Sky 坂上なち
missing pages ayame
A_Loops_Z mican*
...
```

断点为：`(max-width: 490px)`，主体卡片最大宽度为 650px

下面是一些数值参考，也可以自选，相近即可：

```
立即购买按钮颜色 #813447
其他按钮颜色 #ededed
封面阴影 0 15px 15px -10px rgb(0, 0, 0, 0.3);
```

更加具体的样式可以参照同名示例视频

## 评分标准

1. 与示例实现几乎无差异：10
2. 与示例实现存在一定差异，但不影响观感：7 - 9
3. 存在明显视觉效果缺失：4 - 6
4. 大面积视觉效果缺失：0 - 3
