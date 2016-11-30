<style>
.tooltip-content {
  color: #fff !important;
}
</style>

## Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

### 基础用法

:::demo 使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`。`trigger`属性用于设置触发`tooltip`的方式，默认为`hover`。
```html
<d-tooltip content="我是tooltip">
  <d-button type="text">鼠标移动到我上面试试</d-button>
</d-tooltip>
<d-tooltip content="我是tooltip" trigger="click">
  <d-button type="text">点我试试</d-button>
</d-tooltip>
```
:::

### content内容分发

:::demo 设置一个名为`content`的`slot`。
```html
<d-tooltip>
  <d-button type="text">鼠标移动到我上面试试</d-button>
  <p slot="content" class="tooltip-content">我是内容分发的conent。</p>
</d-tooltip>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  top/right/bottom/left |  top |
| trigger | tooltip触发方式 | String | — | hover |
