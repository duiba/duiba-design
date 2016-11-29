<script>
export default {
  data() {
    return {
      status1: false,
      status2: true
    };
  }
};
</script>

<style>
.switch {
  margin: 10px 0;
}
</style>

## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 通常只需要用到双向绑定 `status` 属性即可。

```html
<d-switch :status.sync="status1"></d-switch>
<d-switch :status.sync="status2"></d-switch>

<script>
export default {
  data() {
    return {
      status1: false,
      status2: true
    };
  }
};
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`为`true`可以禁用该组件。

```html
<d-switch :status.sync="status1" :disabled="true"></d-switch>

<script>
export default {
  data() {
    return {
      status1: false
    };
  }
};
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| status  | 当前开关状态    | boolean   | — | true |
| onChange  | 开关点击回调，可用于点击时需要确认等场合，在父组件中操作开关状态    | Function   | — | - |
