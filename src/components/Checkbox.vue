<template>
  <label class="d-checkbox-control"
    v-bind:class="{
      'is-disabled': disabled
    }"
  >
    <i class="icon" v-bind:class="{'iconhandle': isChecked}" @click="handleClick">
      <span>{{{isChecked ? '&#xe610;' : ''}}}</span>
    </i>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'd-checkbox',

  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isChecked: {
      get() {
        if (!this.wrapInGroup) {
          return this.checked;
        } else {
          return this.$parent.value.indexOf(this.name) !== -1;
        }
      },
      set(newValue) {
        if (!this.wrapInGroup) {
          this.checked = newValue;
        } else {
          let index = this.$parent.value.indexOf(this.name);
          if (newValue && index === -1) {
            this.$parent.value.push(this.name);
          } else if (index !== -1) {
            this.$parent.value.splice(index, 1);
          }
        }
      }
    }
  },

  data() {
    return {
      wrapInGroup: this.$parent.$options.name === 'd-checkbox-group'
    };
  },

  methods: {
    handleClick() {
      // 禁用
      if (this.disabled) {
        return;
      }
      this.isChecked = !this.isChecked;
      this.$emit('change', this.isChecked);
    }
  }
};
</script>

<style lang="less">
.d-checkbox-control {
  display: inline-block;
  line-height: 34px;
  height: 34px;
  padding-left: 24px;
  position: relative;
  font-size: 14px;

  input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 10px;
    z-index: -1;
  }

  .icon {
    position: absolute;
    left: 0;
    top: 10px;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border: 1px solid #e4e3df;
    font-size: 12px;
    cursor: pointer;
    border-radius: 1px;
    background-color: #fff;

    &:hover {
      border-color: #828282;
    }
  }

  .iconhandle {
    background-color: #29b6b0;
    border-color: #29b6b0;
    color: #fff;

    span {
      display: block;
      transform: scale(.6, .6);
      margin-top: 1px;
    }

    &:hover {
      border-color: #29b6b0;
    }
  }

  &.is-disabled {
    .iconhandle,
    .icon {
      cursor: not-allowed;
      background-color: #d3dce6;
      border-color: #d3dce6;
    }

    .icon {
      border-color: #d3dce6;
    }
  }
}
</style>

