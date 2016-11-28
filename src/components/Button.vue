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

// default btn color
@btn-default-color:            #444;
@btn-default-bg:               #fff;
@btn-default-border:           #ccc;
@btn-default-border-hover:     #888;
.d-button--default {
  background: @btn-default-bg;
  color: @btn-default-color;
  border: 1px solid @btn-default-border;

  &:hover {
    border-color: @btn-default-border-hover;
  }
}

// greent btn color
@btn-green-color:              #fff;
@btn-green-bg:                 #29b6b0;
@btn-green-border:             #29b6b0;
@btn-green-bg-hover:           #15c8c0;
@btn-green-border-hover:       #15c8c0;

.d-button--primary {
  background: @btn-green-bg;
  border: 1px solid @btn-green-border;
  color: @btn-green-color;

  &:hover {
    background: @btn-green-bg-hover;
    border: 1px solid @btn-green-border-hover;
  }
}
</style>

