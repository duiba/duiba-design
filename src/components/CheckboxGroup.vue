<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'd-checkbox-group',

  props: {
    value: {
      type: Array
    }
  },

  watch: {
    value: function(value) {
      this.$emit('change', value);
    }
  }
};
</script>
