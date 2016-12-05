<script>
export default {
  data() {
    return {
      value: '',
      images: []
    };
  }
};
</script>

<style lang="less">
.multi-images {
  overflow: hidden;

  img {
    width: 214px;
    height: 100px;
  }

  .add-image-btn {
    width: 214px;
    font-size: 40px;
    line-height: 100px;
  }
}
</style>

## ImageUpload 图片上传

用于图片上传。

### 基础用法

单张图片上传的用法。

:::demo 允许上传单张图片。
```html
<d-imageupload upload-url="/upload/image" :value.sync="imageUrl" :width="640">
  <p slot="upload-tip">
    尺寸为100*100像素，格式为jpg、png，图片大小不可大于1M。
  </p>
</d-imageupload>
```
:::

### 多图上传

多张图片上传。

:::demo 上传多张图片。
```html
<d-multi-imageupload class="multi-images" upload-url="/upload/image" :values.sync="images" :width="640">
</d-multi-imageupload>
```
:::

### ImageUpload Attributes

| 参数 | 说明 | 类型  | 可选值  | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| uploadUrl | 图片上传接口地址 | String | — | - |
| value | 上传的图片url | String | — | - |
| width | 上传的图片宽度 | Number | — | - |
| height | 上传的图片高度 | Number | — | - |
| size | 上传的图片大小（单位为：B） | Number | — | 1024 * 1024 |
| extensions | 允许上传的图片格式 | String | — | jpg,png,jpeg |
| errorTip | 错误提示 | String | — | - |


### MultiImageUpload Attributes

| 参数 | 说明 | 类型  | 可选值  | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| values | 上传的图片 | Array | — | - |
