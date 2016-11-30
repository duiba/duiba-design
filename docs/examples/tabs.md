## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件目前只有一种样式，后续如果有其他风格的tab，可以添加一个`type`属性。

```html
<d-tabs>
  <d-tab header="在线充值">
    在线充值
  </d-tab>
  <d-tab header="转账汇款">
    转账汇款
  </d-tab>
</d-tabs>
```
:::


### Tabs Attributes

| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active     | 当前哪个选项卡处于active状态，从0开始的索引   | number   | -  |     0    |

### Tab Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header     | 选项卡标题   | string   | — |    —     |
| disabled      | 选项卡是否被禁用 | boolean | true,false | false |

