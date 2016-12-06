<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>

## RichEditor 富文本编辑器

用于输入富文本。

### 基础用法

:::demo 使用时需要在页面中引入`wysihtml5`，
```html
<d-richeditor toolbar-id="desc-toolbar" editor-id="desc-editor" placeholder="此奖品的介绍文案以及使用说明文案" :description="value" :value.sync="value">
</d-richeditor>

<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
```
:::
