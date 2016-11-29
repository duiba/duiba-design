<script>
export default {
  data() {
    return {
      modal1Show: false,
      modal2Show: false
    };
  }
};
</script>

## Modal 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认。

### 基本用法


:::demo `modal-header`、`modal-body`和`modal-footer`都可以利用内容分发去覆盖，当然你也可以使用默认的。
```html
<d-button type="text" @click="modal1Show = true">点击打开弹框</d-button>

<d-modal title="modal标题" description="modal说明" :show.sync="modal1Show" width="400">
</d-modal>
```
:::

### 二次封装

:::demo 利用内容分发覆盖`modal-header`、`modal-body`和`modal-footer`。
```html
<d-button type="text" @click="modal2Show = true">点击打开弹框</d-button>

<d-modal title="modal标题" :show.sync="modal2Show" width="400">
  <template slot="modal-body">
    <div class="modal-body">
      <p>我是内容分发的内容。</p>
    </div>
  </template>
  <template slot="modal-footer">
    <div class="modal-footer">
      <d-button type="primary" @click="modal2Show = false">确定</d-button>
    </div>
  </template>
</d-modal>
```
:::

### Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| okText     | 确定按钮文案   | string  |   -            |    确定     |
| cancelText     | 取消按钮文案   | string    |   - |     取消    |
| title  | 弹框标题    | string   | -   | -   |
| description  | 弹框描述 | string   |  —  |  —  |
| show  | 弹框是否显示 | boolean   |  true,false  |  false  |
| width  | 弹框宽度 | string   |  -  |  300  |
| backdrop  | 点击弹框其他区域是否能关闭弹框 | boolean   |  true,false  |  true  |
| onOk  | 确定点击回调 | Function   |  -  |  -  |
| onClose  | 取消点击回调 | Function   |  -  |  -  |
