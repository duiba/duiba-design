<template>
  <div class="multi-image-upload">
    <ul class="uploaded-image">
      <li track-by="$index" v-for="(index, img) in values">
        <img :src="img">
        <i class="iconhandle remove-icon" @click="removeImage(index)">&#xe605;</i>
      </li>
    </ul>
    <div class="add-image-container" v-show="values.length < max">
      <fileupload class="file-upload" name="file" :post-action="uploadUrl" :put-action="uploadUrl" :extensions="extensions" :accept="accept" :size="size"></fileupload>
      <i class="add-image-btn">+</i>
    </div>
    <p class="invalid" v-show="errorTip">
      <i class="iconhandle">&#xe62a;</i>
      {{errorTip}}
    </p>
  </div>
</template>

<script>
import ImageUploadMixins from '../mixins/ImageUploadMixins';

export default {
  name: 'd-multi-imageupload',

  mixins: [ImageUploadMixins],

  props: {
    values: {
      type: Array,
      default: () => {
        return [];
      },
      twoWay: true
    },
    max: {
      type: Number,
      default: 5
    },
    uploadUrl: {
      type: String,
      default: '/upload/image'
    }
  },

  methods: {
    afterFileUpload: function(file) {
      this.values.push(file.data.data.url);
      this.$emit('uploaded', this.url);
    },

    /**
     * 移除某张图片
     */
    removeImage: function(index) {
      this.values.splice(index, 1);
    }
  }
};
</script>

<style lang="less">
.multi-image-upload {

  .uploaded-image,
  .add-image-container {
    float: left;
  }

  li {
    float: left;
    padding: 3px;
    position: relative;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  img {
    display: block;
  }

  .remove-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    color: #ccc;
    cursor: pointer;
  }

  .add-image-container {
    padding: 3px;
    border: 1px solid #e5e5e5;
    position: relative;
  }

  .add-image-btn {
    display: block;
    background-color: #d8d8d8;
    text-align: center;
    color: #fff;
    min-width: 100px;
  }

  .file-upload {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100px;
    height: 100px;

    input {
      z-index: 1;
      opacity: 0;
      font-size: 20em;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  .invalid {
    clear: both;
    font-size: 14px;
    color: #ff795c;
    padding-top: 10px;
  }
}
</style>
