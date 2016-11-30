<template>
  <div class="breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'd-breadcrumb',

    props: {
      separator: {
        type: String,
        default: '&#xe619;'
      }
    }
  };
</script>
