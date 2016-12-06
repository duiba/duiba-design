<template>
  <div class="richeditor" v-el:richeditor>
    <div class="richeditor-toolbar" id="{{toolbarId}}" style="display: none;">
      <a data-wysihtml5-command="formatBlock" class="iconhandle" data-wysihtml5-command-value="h4" v-if="toolbar.formatBlock">&#xe62d;</a>
      <a data-wysihtml5-command="formatBlock" class="iconhandle" data-wysihtml5-command-value="p" v-if="toolbar.formatBlockP">&#xe656;</a>
      <a data-wysihtml5-command="fontSize" class="iconhandle" data-wysihtml5-command-value="large" v-if="toolbar.fontSize">&#xe62e;</a>
      <a data-wysihtml5-command="bold" class="iconhandle" title="CTRL+B" v-if="toolbar.bold">&#xe622;</a>
      <a data-wysihtml5-command="foreColor" class="iconhandle foreColor" data-wysihtml5-command-value="red" v-if="toolbar.foreColor">&#xe625;</a>
      <a data-wysihtml5-command="createLink" class="iconhandle create-link" v-if="toolbar.createLink">&#xe604;</a>
      <a data-wysihtml5-command="insertUnorderedList" class="iconhandle unordered-list" v-if="toolbar.insertUnorderedList">&#xe626;</a>
      <a data-wysihtml5-command="insertOrderedList" class="iconhandle ordered-list" v-if="toolbar.insertOrderedList">&#xe627;</a>
      <a data-wysihtml5-command="insertImage" class="iconhandle insert-image" v-if="toolbar.insertImage" @click="insertImageClick">&#xe623;</a>

      <div class="wysihtml5-link-modal" data-wysihtml5-dialog="createLink" style="display: none;" v-if="toolbar.createLink">
        <div class="form-group">
          <label>
            地址：
          </label>
          <input data-wysihtml5-dialog-field="href" value="http://" class="form-control">
        </div>
        <div class="link-btns">
          <d-button data-wysihtml5-dialog-action="cancel">取消</d-button>
          <d-button data-wysihtml5-dialog-action="save" type="primary">确认</d-button>
        </div>
      </div>

      <div class="wysihtml5-image-modal" data-wysihtml5-dialog="insertImage" style="display: none;" v-if="toolbar.insertImage">
        <d-modal title="添加图片" :width="570" :show.sync="imageModalShow">
          <div class="modal-header" slot="modal-header">
            <i class="iconhandle close" data-wysihtml5-dialog-action="cancel">&#xe609;</i>
            <h4 class="modal-title" > 
              添加图片
            </h4>
          </div>
          <div class="modal-body" slot="modal-body">
            <d-imageupload :url.sync="imageUrl" :width="imageWidth">
              <p slot="upload-tip">
                图片宽为{{imageWidth}}px格式为jpg、jpeg、png
              </p>
            </d-imageupload>
            <input type="hidden" data-wysihtml5-dialog-field="src" :value="imageUrl" v-el:imageurl>
          </div>
          <div class="modal-footer" slot="modal-footer">
            <d-button type="primary" data-wysihtml5-dialog-action="save" v-if="imageUrl.length !== 0">添加</d-button>
            <d-button type="primary" disabled v-else>添加</d-button>
            <d-button data-wysihtml5-dialog-action="cancel">取消</d-button>
          </div>
        </d-modal>
      </div>
    </div>
    <textarea id="{{editorId}}" placeholder="{{placeholder}}" :value="description">
    </textarea>
  </div>
</template>

<script>
import DImageupload from './ImageUpload';
import DButton from './Button';
import DModal from './Modal';

/* eslint-disable no-new */
export default {
  name: 'd-richeditor',

  components: {
    DImageupload,
    DButton,
    DModal
  },

  props: {
    toolbar: {
      default: () => {
        return {
          formatBlock: true,
          fontSize: true,
          bold: true,
          foreColor: true,
          createLink: true,
          insertUnorderedList: true,
          insertOrderedList: true,
          insertImage: true,
          formatBlockP: false
        };
      }
    },
    description: {
      type: String,
      default: ''
    },
    toolbarId: {
      type: String,
      default: '',
      required: true
    },
    editorId: {
      type: String,
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      default: '',
      twoWay: true
    },
    alwaysUpdate: {
      type: Boolean,
      default: false
    },
    imageWidth: {
      type: Number,
      default: 640
    }
  },

  data() {
    return {
      imageUrl: '',
      isInit: false,
      imageModalShow: false
    };
  },
  watch: {
    'description': function(val) {
      if (this.alwaysUpdate) {
        this.editor.setValue(val);
      } else {
        if (val && (!this.isInit || !this.toolbar.insertImage)) {
          this.editor.setValue(val);
          this.isInit = true;
        }
      }
    }
  },

  ready() {
    this.editor = new wysihtml5.Editor(this.editorId, {
      toolbar: this.toolbarId,
      parserRules: wysihtml5ParserRules,
      stylesheets: '//yun.duiba.com.cn/tuia/tuia-advertiser/css/wysihtml5.v5.css',
      useLineBreaks: false
    });
    this.editor.on('blur', () => {
      this.value = this.editor.getValue();
    });
    this.editor.on('show:dialog', (event) => {
      if (event.command === 'insertImage') {
        this.imageUrl = this.$els.imageurl.value;
      }
    });
  },

  methods: {
    insertImageClick: function() {
      if (!this.isInit) {
        this.value = this.editor.getValue();
      }
      this.imageModalShow = true;
      this.imageUrl = '';
    }
  }
};
</script>

<style lang="less">
.richeditor {
  border: 1px solid #d9d9d9;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  textarea {
    border: 0;
    height: 300px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    outline: 0;
    resize: none;
    font-size: 14px;
  }

  .wysihtml5-link-modal {
    position: absolute;
    z-index: 100;
    border: 1px solid #e9e9e9;
    background-color: #fff;
    border-radius: 5px;
    top: -10px;
    left: -1px;
    width: 80%;

    .form-group {
      padding: 5px 15px 15px;
      border-bottom: 1px solid #e9e9e9;
      margin-bottom: 10px;
    }

    .link-btns {
      margin: 10px 0;
      padding: 0 15px;
    }

    label {
      line-height: 2;
      color: #666;
    }
  }

  .foreColor.wysihtml5-command-active {
    color: #F66B4E;
  }
}

.richeditor-toolbar {
  padding-left: 10px;
  background: #fafafa;

  .iconhandle {
    display: inline-block;
    line-height: 40px;
    padding: 0 7px;
    color: #bbb;
    font-weight: normal;
    font-size: 12px;
  }

  .iconhandle.foreColor {
    line-height: 9px;
    border-bottom: 2px solid #F66B4E;
    margin: 10px 7px 0px;
    padding: 0px;
  }

  .iconhandle:hover {
    color: #444;
  }

  .create-link,
  .ordered-list {
    padding-right: 15px;
  }

  .unordered-list,
  .insert-image {
    border-left: 1px dashed #d9d9d9;
    padding-left: 15px;
  }
}

.wysihtml5-image-modal {
  .modal-dialog {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }

  .modal-footer {
    border-top: 1px solid #e9e9e9;
    overflow: hidden;
    padding: 10px 20px;
  }

  .modal-body .iconhandle {
    color: #ff795c;
  }
}
</style>
