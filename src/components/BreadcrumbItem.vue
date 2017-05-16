<template>
  <span class="d-breadcrumb__item">
    <span class="d-breadcrumb__item__inner" ref="link">
      <slot></slot>
    </span>
    <span class="d-breadcrumb__separator">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'd-breadcrumb-item',

    props: {
      to: {}
    },

    data() {
      return {
        separator: ''
      };
    },

    ready() {
      this.separator = this.$parent.separator;
      if (this.to) {
        let link = this.$refs.link;
        link.addEventListener('click', _ => {
          this.$router.go(this.to);
        });
      }
    }
  };
</script>

<style lang="less">
.d-breadcrumb {
  line-height: 1;
  font-size: 18px;
}
.d-breadcrumb__item {
  color: #444;

  &:last-child {
    font-weight: bold;

    .d-breadcrumb__separator {
      display: none;
    }

    .d-breadcrumb__item__inner {
      cursor: default;
    }
  }
}

.d-breadcrumb__separator {
  font-family: handle;
  font-size: 12px;
  margin: 0 5px;
  vertical-align: middle;
}

.d-breadcrumb__item__inner {
  cursor: pointer;
}
</style>
