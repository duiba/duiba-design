<script>
export default {
  data() {
    return {
      appId: null,
      appList: [
        {
          appId: '',
          name: '选择应用'
        },
        {
          appId: '1',
          name: '大富翁'
        }
      ]
    };
  },

  methods: {
    selectItem: function(v) {
      console.log(v);
    }
  }
};
</script>

## Select 下拉框

模拟表单组件的`select`。

### 基础用法

适用广泛的基础单选。

:::demo `options`属性需传入一个数组，其值为可以选择的选项。`value`为选中的值。`idName`对应每个选项的`id`的名称，比如为`appId`，默认为`id`。`label-name`为选项名称的字段，默认为`label`。
```html
<d-select :options="appList" :value.sync="appId" id-name="appId" label-name="name" @select="selectItem"></d-select>

<script>
export default {
  data() {
    return {
      appId: null,
      appList: [
        {
          appId: '',
          name: '选择应用'
        },
        {
          appId: '1',
          name: '大富翁'
        }
      ]
    };
  },

  methods: {
    selectItem: function(v) {
      console.log(v);
    }
  }
};
</script>
```
:::

### 禁用状态

`select`的禁用状态。

:::demo 传入一个`disabled`属性即可。
```html
<d-select :options="appList" :value.sync="appId" id-name="appId" label-name="name" disabled></d-select>

<script>
export default {
  data() {
    return {
      appId: null,
      appList: [
        {
          appId: '',
          name: '选择应用'
        },
        {
          appId: '1',
          name: '大富翁'
        }
      ]
    };
  }
};
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值  | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  trigger |  触发下拉的方式  | String | hover,click等 | hover |
|  idName  |  id键名  | String |  - |  id |
| labelName | label键名 | String | — | label |
| value | 下拉框选中的值 | String | — | - |
| disabled | 下拉框是否禁用 | Boolean | — | false |
| options | 下拉框选项 | Array | — | [] |
