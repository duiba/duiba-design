<template>
  <div class="d-switch" v-bind:class="{
    'on': status,
    'disable': disabled,
    'off': !status
  }" @click="toggleSwitch">
    <label class="d-switch-label">
      <div class="d-switch-inner"></div>
      <div class="d-switch-switch"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'd-switch',

  props: {
    status: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      default: null
    },
    params: {
      default: null
    }
  },

  methods: {
    toggleSwitch: function() {
      // if (this.onChange) {
      //   this.onChange(!this.status, this.params);
      //   return;
      // }
      if (!this.disabled) {
        this.$emit('update:status', !this.status);
      }
    }
  }
};
</script>

<style lang="less">
.d-switch {
  position: relative;
  width: 44px;
  user-select: none;
}

.d-switch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border-radius: 11px;
}

.d-switch-inner {
  width: 200%;
  margin-left: -100%;
  transition: margin 0.2s ease-in;
}

.d-switch-inner:before,
.d-switch-inner:after {
  float: left;
  padding: 0;
  width: 50%;
  height: 22px;
  line-height: 22px;
  color: white;
  box-sizing: border-box;
}

.d-switch-inner:before {
  content: "开";
  padding-left: 7px;
  font-size: 12px;
  color: #fff;
  background-color: #444;
}

.d-switch-inner:after {
  content: "关";
  padding-right: 7px;
  color: #fff;
  font-size: 12px;
  background-color: #bbb;
  text-align: right;
}

.d-switch-switch {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 22px;
  width: 14px;
  margin: 4px;
  background: white;
  border-radius: 11px;
  transition: right 0.2s ease-in, box-shadow 0.2s ease-in;
}

.on .d-switch-inner {
  margin-left: 0;
}

.on .d-switch-switch {
  right: 0;
}

.disable  {
  .d-switch-inner:before,
  .d-switch-inner:after {
    cursor: not-allowed;
    background-color: #eee;
  }
}
</style>

