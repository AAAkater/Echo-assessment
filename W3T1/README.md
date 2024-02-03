# EMO 开关

请仔细观察视频，实现所有展示出的效果，包括背景变换以及滑块运动回弹

请在 `.wrapper` DIV 标签下以及 `main.css` 文件中作答，不要修改模板的其余部分

`main.css` 中包含了一些预置样式，你可以视情况修改

模板中包含一些 JS，实现了当 `.wrapper` 被点击，其类名 `switch-on` 切换的效果，据此可以实现两种状态的样式以及切换动画，下面是一个示范：

```css
/* 当包含类名 `switch-on`，背景为红色 */
.switch-on.wrapper .bg {
  background-color: red;
}

/* 当不包含类名 `switch-on`，背景为蓝色 */
.wrapper .bg {
  background-color: blue;
}
```

## 参考数据

下面是一些参考数据，可以使用以下的数据，也可以自己写

不要求完全相似，只需要相近且美观

- 主体的背景颜色是 #ececec，边框颜色是 #f5f5f5
- 选中后的主体的的背景颜色是 #24e38c
- 主体的边框宽度是 6px。
- 主体的阴影是 y 轴偏移 20px，模糊半径 40px，扩散半径 10px，颜色 rgba(47, 68, 91, 0.2)。
- 白色小纽的阴影是 y 轴偏移 6px，模糊半径 6px，颜色 rgba(0, 0, 0, 0.3)。
- 白色小纽的过渡时间函数是 cubic-bezier(0.2, 0.3, 0, 1.1)，找一个 [cubic-bezier 可视化网站](https://www.cssportal.com/css-cubic-bezier-generator/)，想一想为什么这个时间函数会造成回弹的效果

## 评分标准

1. 与示例实现几乎无差异：10
2. 与示例实现存在一定差异，但不影响观感：7 - 9
3. 存在明显视觉效果缺失：4 - 6
4. 大面积视觉效果缺失：0 - 3

## 参考文档

- [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
- [过渡](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
- [阴影](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
- [Transform 变换](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

点击对应链接查看 MDN 文档
