<template>
  <div role="dialog"
    v-bind:class="{
      'modal': true,
      'fade': effect === 'fade',
      'message-box': type === 'message',
    }"
  >
    <div class="modal-dialog" role="document" v-bind:style="{width: optionalWidth}">
      <div class="modal-content">
        <slot name="modal-header" v-if="type !== 'message'">
          <div class="modal-header">
            <i class="iconhandle close" @click="close">&#xe609;</i>
            <h4 class="modal-title">
              <slot name="title">
                {{title}}
              </slot>
            </h4>
          </div>
        </slot>
        <slot name="modal-body">
          <div class="modal-body">
            <template v-if="type === 'message'">
              <p>
                <i class="iconhandle success" v-if="messageType === 'success'">&#xe629;</i>
                <i class="iconhandle error" v-if="messageType === 'error'">&#xe605;</i>
                {{title}}
              </p>
              <p class="desc" v-if="messageDesc">
                {{messageDesc}}
              </p>
            </template>
            <template v-else>
              <p>{{{description}}}</p>
            </template>
          </div>
        </slot>
        <slot name="modal-footer" v-if="type !== 'message'">
          <div class="modal-footer">
            <d-button type="primary" size="large" @click="onOk">{{ okText }}</d-button>
            <d-button size="large" @click="close">{{ cancelText }}</d-button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import getScrollBarWidth from '../utils/getScrollBarWidth.js';
import EventListener from '../utils/EventListener.js';
import DButton from './Button';

export default {
  name: 'd-modal',

  components: {
    DButton
  },

  props: {
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    messageType: {
      type: String,
      default: 'success'
    },
    messageDesc: {
      type: String,
      default: ''
    },
    show: {
      require: true,
      type: Boolean
    },
    width: {
      default: 300
    },
    onOk: {
      type: Function,
      default: () => {}
    },
    effect: {
      type: String,
      default: 'fade'
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    onClose: {
      default: null
    }
  },
  ready() {
    this.$watch('show', (val) => {
      const el = this.$el;
      const body = document.body;
      const scrollBarWidth = getScrollBarWidth();
      const contentBox = el.querySelector('.modal-content');
      const dialogBox = el.querySelector('.modal-dialog');

      if (val) {
        contentBox.focus();
        el.style.display = 'block';
        setTimeout(() => {
          el.classList.add('in');

          setTimeout(() => {
            const dialogHeight = dialogBox.offsetHeight;
            const dialogWidth = dialogBox.offsetWidth;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (dialogHeight > windowHeight) {
              dialogBox.style.top = '50px';
            } else {
              dialogBox.style.top = ((windowHeight - dialogHeight) / 2) - 50 + 'px';
            }
            dialogBox.style.left = ((windowWidth - dialogWidth) / 2) + 'px';
          }, 0);
        }, 0);
        body.classList.add('modal-open');

        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px';
        }

        if (this.backdrop) {
          this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e) => {
            if (e.target === el) {
              if (this.onClose) {
                this.onClose();
                return;
              } else {
                this.show = false;
              }
            }
          });
        }
      } else {
        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();

        el.classList.remove('in');
        setTimeout(() => {
          el.style.display = 'none';
          body.classList.remove('modal-open');
          body.style.paddingRight = '0';
        }, 300);
      }
    }, { immediate: true });
  },
  computed: {
    optionalWidth() {
      if (this.width === null) {
        return null;
      } else if (Number.isInteger(+this.width)) {
        return this.width + 'px';
      }

      return this.width;
    }
  },
  methods: {
    close() {
      if (this.onClose) {
        this.onClose();
        return;
      }
      this.show = false;
    }
  },
  destroyed() {
    if (this._blurModalContentEvent) {
      this._blurModalContentEvent.remove();
    }
  }
};
</script>

<style lang="less">
.modal-open {
  overflow: hidden;

  .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  transition: all .5s ease;

  &.fade {
    .modal-dialog {
      transition: transform .5s ease-out;
      transform: translate(0, -25%);
    }
  }

  &.in {
    background-color: rgba(0, 0, 0, .5);

    .modal-dialog {
      transform: translate(0, 0);
    }
  }

  &.message-box {
    .modal-dialog {
      width: auto !important;
      max-width: 500px;
      position: absolute;
      left: 50%;
    }

    .modal-content {
      border-top: 0;
      box-shadow: none;
    }

    .iconhandle {
      margin-right: 5px;
    }

    .success {
      color: #59dfa3;
    }

    .error {
      color: #f9431d;
    }

    p {
      color: #444;
      font-size: 14px;
      padding: 0 5px 0 3px;
      text-align: center;
      margin: 5px 0;

      &.desc {
        color: #888;
        font-size: 12px;
      }
    }
  }
}

.fade {
  opacity: 0;
  transition: opacity .15s linear;

  &.in {
    opacity: 1;
  }
}

.modal-dialog {
  position: absolute;
  width: auto;
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  border-top: 8px solid #444;

  .close {
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
    font-size: 12px;
    color: #d8d8d8;

    &:hover {
      color: #444;
    }
  }
}

.modal-header {
  padding: 24px 20px 0;
  font-size: 15px;
  line-height: 20px;

  .modal-title {
    font-weight: 700;
    font-size: 16px;
    color: #444;
    margin: 0;
  }
}

.modal-body {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
}

.modal-footer {
  padding: 10px 0 20px 20px;
}
</style>

