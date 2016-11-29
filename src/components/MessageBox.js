import Vue from 'vue';
import getScrollBarWidth from '../utils/getScrollBarWidth.js';

var MessageBoxConstructor = Vue.extend(require('./Modal.vue'));

var MessageBox = function(options) {
  const body = document.body;
  var instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    propsData: {
      title: options.title,
      messageType: options.type,
      messageDesc: options.description,
      type: 'message',
      show: false
    }
  });
  instance.$watch('show', function(val) {
    const scrollBarWidth = getScrollBarWidth();
    if (val) {
      this.show = true;
      body.classList.add('modal-open');
      if (scrollBarWidth !== 0) {
        body.style.paddingRight = scrollBarWidth + 'px';
      }
    }
    setTimeout(() => {
      this.close();
      body.classList.remove('modal-open');
      body.style.paddingRight = '0';
      this.$nextTick(function() {
        this.$remove();
      });
    }, options.time || 1500);
  });
  setTimeout(function() {
    instance.show = true;
    instance.$appendTo(body);
  }, 500);
};

MessageBox.ignoreInit = true;

export default MessageBox;
