import fileupload from '../components/FileUpload';

export default {
  components: {
    fileupload
  },

  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      default: 'auto'
    },
    size: {
      type: Number,
      default: 1024 * 1024
    },
    extensions: {
      type: String,
      default: 'jpg,png,jpeg'
    },
    errorTip: {
      type: String,
      default: ''
    }
  },

  computed: {
    accept: function() {
      let str = [];
      if (this.extensions.indexOf('jpg') !== -1) {
        str.push('image/jpg');
      }
      if (this.extensions.indexOf('jpeg') !== -1) {
        str.push('image/jpeg');
      }
      if (this.extensions.indexOf('png') !== -1) {
        str.push('image/png');
      }
      if (this.extensions.indexOf('gif') !== -1) {
        str.push('image/gif');
      }
      return str.join(',');
    }
  },

  events: {
    addFileUpload: 'addFileUpload',
    afterFileUpload: 'afterFileUpload'
  },

  methods: {
    addFileUpload: function(file, component) {
      this.errorTip = '';
      let nameType = false;
      let extArray = this.extensions.split(',');
      extArray.forEach((item) => {
        if (file.name.indexOf(item) !== -1 && !nameType) {
          nameType = true;
        }
      });
      if (!nameType) {
        this.errorTip = '上传的图片格式不符合要求';
        return;
      }

      if (file.size > this.size) {
        this.errorTip = '图片大小超过上传大小';
        return;
      }
      if ((this.width && +file.width !== +this.width) || (this.height && +file.height !== +this.height)) {
        this.errorTip = '上传的图片尺寸不符合要求';
        return;
      }
      component.active = true;
    }
  }
};
