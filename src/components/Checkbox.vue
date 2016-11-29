<template>
  <label class="checkbox-control"
    v-bind:class="{
      'active': checked
    }"
  >
    <input type="checkbox" :name="name" autocomplete="off" :checked="checked" />
    <i class="icon" v-bind:class="{'iconhandle': checked}" @click="handleClick"><span>{{{checked ? '&#xe610;' : ''}}}</span></i>
    <slot></slot>
  </label>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js';

export default {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    name: {
      type: String
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
      this.onChange(this.checked);
    }
  }
};
</script>
