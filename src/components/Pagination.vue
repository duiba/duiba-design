<template>
  <div class="pagination">
    <div class="total-count">共{{total}}条</div>
    <ul class="pagination-list">
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    total: {
      required: true,
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },

  methods: {
    
  }
};
</script>

<style lang="less">
  
</style>

