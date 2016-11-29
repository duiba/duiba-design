<script>
import MessageBox from 'src/components/MessageBox.js';

export default {
  methods: {
    open1: function() {
      MessageBox({
        title: '保存成功！',
        description: 'Messagebox说明Messagebox说明'
      });
    },
    open2: function() {
      MessageBox({
        title: '保存成功！',
        description: 'Messagebox说明Messagebox说明',
        type: 'error'
      });
    }
  }
};
</script>

## MessageBox 消息框

常用于主动操作后的反馈提示。

### 基础用法

从顶部出现，1.5s后消失。

:::demo MessageBox成功提示。

```html
<d-button type="text" @click="open1">点我弹出MessageBox</d-button>

<script>
export default {
  methods: {
    open1: function() {
      MessageBox({
        title: 'MessageBox成功提示。'
      });
    }
  }
};
</script>
```
:::

### 不同状态

用来显示「成功、错误」类的操作反馈。

:::demo MessageBox暂时只有`success`和`error`两种状态，通过`type`参数传入对应`type`即可，默认为`success`。

```html
<d-button type="text" @click="open1">点我弹出成功MessageBox</d-button>
<d-button type="text" @click="open2">点我弹出错误MessageBox</d-button>

<script>
export default {
  methods: {
    open1: function() {
      MessageBox({
        title: 'MessageBox成功提示。'
      });
    },
    open2: function() {
      MessageBox({
        title: '保存成功！',
        desc: 'Messagebox说明Messagebox说明',
        type: 'error'
      });
    }
  }
};
</script>
```
:::

### Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 消息框标题 | string | — | - |
| description | 消息框说明 | string | — | - |
| type | 消息框类型 | success,error | — | success |
