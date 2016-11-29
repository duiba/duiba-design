## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<d-button>默认按钮</d-button>
<d-button type="primary">主要按钮</d-button>
<d-button type="text">文字按钮</d-button>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<d-button :disabled="true">默认按钮</d-button>
<d-button type="primary" :disabled="true">主要按钮</d-button>
<d-button type="text" :disabled="true">文字按钮</d-button>
```
:::

### 颜色倾向

不同的颜色倾向代表不同的提示。

:::demo 目前只提供了 `warning` 样式，显示为橘色，如有其他颜色需求可以添加不同的type。
```html
<d-button type="warning">警告按钮</d-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::demo 设置`icon`属性为对应的iconfont值即可。

```html
<d-button icon="&#xe61d;">批量删除</d-button>
<d-button icon="&#xe61d;" type="primary">批量删除</d-button>
<d-button icon="&#xe61d;"></d-button>
```
:::

### 不同尺寸

Button组件提供除了默认值以外，还有一种大尺寸按钮，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`，通过设置`size`属性来配置它们。

```html
<d-button type="primary" size="large">大型按钮</d-button>
<d-button type="primary">正常按钮</d-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large            |    —     |
| type     | 类型   | string    |   primary,warning,text |     —    |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |

