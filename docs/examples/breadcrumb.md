## Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

### 基础用法

适用广泛的基础用法。

:::demo 在`d-breadcrumb`中使用`d-breadcrumb-item`标签表示从首页开始的每一级。且提供了一个`separator`属性，在`d-breadcrumb`标签中设置它来决定分隔符。

```html
<d-breadcrumb>
  <d-breadcrumb-item :to="{ path: '/' }">首页</d-breadcrumb-item>
  <d-breadcrumb-item>活动管理</d-breadcrumb-item>
  <d-breadcrumb-item>活动列表</d-breadcrumb-item>
  <d-breadcrumb-item>活动详情</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | iconfont的`&#xe619;` |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
