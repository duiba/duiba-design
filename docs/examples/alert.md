<style lang="less">
.tip {
  margin: 20px 0;
}
</style>

## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

::: demo Alert 组件提供目前就一种类型，后续有需求可以添加 `type` 属性。
```html
<d-alert :closable="false">
  这是一个不能关闭的alert
</d-alert>
<d-alert>
  这是一个可以关闭的alert
</d-alert>
```
:::


### Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| closable | 是否可关闭 | boolean | — | true |
| show | 是否显示 | boolean | — | true |
