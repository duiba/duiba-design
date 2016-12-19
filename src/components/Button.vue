<template>
  <button :disabled="disabled" @click="clickHandle" class="d-button"
    :class="[
      type ? 'd-button--' + type : '',
      size ? 'd-button--' + size : '',
      {
        'is-disabled': disabled
      }
    ]"
  >
    <i class="iconhandle" v-if="icon">{{{icon}}}</i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'd-button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: [String, Object]
  },

  methods: {
    clickHandle: function(event) {
      if (this.disabled) {
        return;
      }
      let to = this.to;
      if (to) {
        if (typeof to === 'string') {
          location.href = to;
        } else {
          this.$router && this.$router.go(to);
        }
        return;
      }
    }
  }
};
</script>

<style lang="less">
.d-button {
  display: inline-block;
  border-radius: 2px;
  line-height: 1;
  height: 30px;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  white-space: nowrap;

  + .d-button {
    margin-left: 15px;
  }

  &.is-disabled {
    cursor: not-allowed;
    background: #f4f4f4;
    border-color: #ececec;
    color: #d8d8d8;

    &:hover {
      border-color: #ececec;
      background: #f4f4f4;
      color: #d8d8d8;
    }
  }

  .iconhandle {
    font-size: 14px;
  }
}

.d-button--default {
  background: #fff;
  color: #444;
  border: 1px solid #ccc;

  &:hover {
    border-color: #888;
  }
}

.d-button--primary {
  background: #29b6b0;
  border: 1px solid #29b6b0;
  color: #fff;

  &:hover {
    background: #15c8c0;
    border: 1px solid #15c8c0;
  }
}

.d-button--text {
  background: transparent;
  border: 0;
  color: #29b6b0;

  &:hover {
    color: #15c8c0;
  }

  &.is-disabled {
    background: transparent;

    &:hover {
      background: transparent;
    }
  }
}

.d-button--warning {
  background: #ff795c;
  border: 1px solid #ff795c;
  color: #fff;

  &:hover {
    background: #ff8970;
    border: 1px solid #ff8970;
  }
}

.d-button--large {
  height: 34px;
  padding: 0 15px;
}
</style>
