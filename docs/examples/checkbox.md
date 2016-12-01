## Checkbox 多选框

<script>
  export default {
    data() {
      return {
        checked: true,
        checked2: true,
        checkList: [1, 5]
      };
    }
  };
</script>

### 基础用法

单独使用可以表示两种状态之间的切换

:::demo 在`d-checkbox`元素中双向绑定`checked`属性即可。

```html
<d-checkbox :checked.sync="checked">备选项</d-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### 禁用状态

禁用状态复选框不可点击

:::demo 在`d-checkbox`元素上设置`disabled`属性即可。

```html
<d-checkbox :checked.sync="checked2" disabled>备选项</d-checkbox>

<script>
  export default {
    data() {
      return {
        checked2: true
      };
    }
  };
</script>
```
:::

### 多选框组

适用于多个复选框绑定到同一个数组的情景，通过是否复选来表示这一组选项中选中的项。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用绑定`value`属性即可，`name`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<d-checkbox-group :value.sync="checkList">
  <d-checkbox :name="1">选项1</d-checkbox>
  <d-checkbox :name="2">选项2</d-checkbox>
  <d-checkbox :name="3">选项3</d-checkbox>
  <d-checkbox :name="4" disabled>选项4</d-checkbox>
  <d-checkbox :name="5" disabled>选项5</d-checkbox>
</d-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkList: ['1','5']
      };
    }
  };
</script>
```
:::

### Checkbox Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | 用于checkbox group时，区分每个复选框 | string,number    |      —         |     —    |
| disabled  | 按钮禁用    | boolean   |  — | false   |
| checked  | 当前是否勾选    | boolean   |  — | false   |

### Checkbox-group Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | checkbox group组的值 | Array    |      —         |     —    |

### Checkbox-group Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | event 事件对象 |
