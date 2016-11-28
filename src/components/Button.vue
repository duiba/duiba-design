<template>
  <button :disabled="disabled" class="d-button"
    @click="handleClick"
    :class="[
      type ? 'd-button--' + type : '',
      size ? 'd-button--' + size : '',
      {
        'is-disabled': disabled
      }
    ]"
  >
    <i :class="iconhandle" v-if="icon">{{{icon}}}</i>
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
    disabled: Boolean
  },

  methods: {
    handleClick(evt) {
      // this.$emit('click', evt);
    }
  }
};
</script>

<style lang="less">
.d-button {
  display: inline-block;
  border-radius: 2px;
  line-height: 28px;
  height: 28px;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
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
}
</style>

