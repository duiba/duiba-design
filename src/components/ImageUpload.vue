<template>
  <div class="d-image-upload-container">
    <div class="img" v-bind:class="{
      'img-uploaded': !!value
    }">
      <p>
        <img :src="value" alt="">
      </p>
    </div>
    <div class="upload-area">
      <div class="upload-cell">
        <slot name="upload-tip">
        </slot>
        <div class="upload-btn">
          <fileupload class="file-upload" name="file" :post-action="uploadUrl" :put-action="uploadUrl" :extensions="extensions" :accept="accept" :size="size"></fileupload>
          <d-button>选择上传</d-button>
        </div>
      </div>
    </div>
    <p class="invalid" v-show="errorTip">
      <i class="iconhandle">&#xe62a;</i>
      {{errorTip}}
    </p>
  </div>
</template>

<script>
import ImageUploadMixins from '../mixins/ImageUploadMixins.js';
import DButton from './Button';

export default {
  name: 'd-imageupload',

  components: {
    DButton
  },

  mixins: [ImageUploadMixins],

  props: {
    uploadUrl: {
      type: String,
      default: '/upload/image'
    },
    value: {
      type: String,
      twoWay: true,
      default: ''
    }
  },

  methods: {
    afterFileUpload: function(file) {
      this.value = file.data.data.value;
      this.$emit('uploaded', this.value);
    }
  }
};
</script>

<style lang="less">
.d-image-upload-container {
  .img {
    padding: 5px;
    border: 1px solid #e5e5e5;
    display: inline-block;
    float: left;

    img {
      opacity: 0;
    }

    p {
      min-width: 100px;
      min-height: 100px;
      background: #d8d8d8 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAuCAMAAACiV5+BAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAS/Di+/hZBYSSRSIczMb06+coct3QuqegmV06Lg99T7uxnH53aGc4EgzK062bAAABXklEQVRIx63V2W6DMBBA0SnYsc0OgbAlzb7N/39gFbeKRAkDBt+nPB1NNCMMZI/mFCaMJeGpecDctiXHd7zczkKeNf6rfpordxd7uXdTxYvxQ7FnqHD8GDdyggQHSgIDJsLBounKDYluUxXhUowrJjIrJFtNZI40c4SR/EbWlTrHNBOfVVXLxh9YsszRqFz2l79THI3jatdVvBRnlXaues2QKCSuka3h3YVC2LeANfGPL5PuJNRfqywavSM/pkfREQPFv6vfkKPo6IE2eknjo4wN5FHDMLl6Bbr966fkg+MEDMkc0LnkMgO44nIGr1DaYEoobDAFODYYB5gNhgG3wXBIbTApRDaYCJQNRsHeBrMH4SxnHAGgcHEKAAK+VOH6oZFLGQmvRLFMKQTo/GSJkvjwV5bOV9IM3vn5XCX3O094NU+pdtCtPZgjhxb6ZTJk0wkWygwGEu3XxNruE/YD6t9ijjcy+L4AAAAASUVORK5CYII=) no-repeat 50%
    }
  }

  .img-uploaded {
    img {
      display: block;
      width: 100%;
      opacity: 1;
    }
  }

  .upload-area {
    display: table;
    padding-left: 20px;
    min-height: 112px;

    p {
      font-size: 14px;
      margin-bottom: 15px;
      color: #888;
    }
  }

  .upload-cell {
    display: table-cell;
    vertical-align: middle;
  }

  .upload-btn {
    position: relative;
  }

  .file-upload {
    width: 78px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;

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
    color: #ffc4b8;
    font-size: 12px;
    margin: 10px 0 0;
  }
}
</style>
