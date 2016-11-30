<template>
  <span class="breadcrumb__item">
    <span class="breadcrumb__item__inner" v-el:link>
      <slot></slot>
    </span>
    <span class="breadcrumb__separator">{{{separator}}}</span>
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
      console.log(this.separator);
      if (this.to) {
        let link = this.$els.link;
        console.log(link);
        link.addEventListener('click', _ => {
          this.$router.go(this.to);
        });
      }
    }
  };
</script>

<style lang="less">
.breadcrumb {
  line-height: 1;
  font-size: 18px;
}
.breadcrumb__item {
  color: #444;

  &:last-child {
    font-weight: bold;

    .breadcrumb__separator {
      display: none;
    }

    .breadcrumb__item__inner {
      cursor: default;
    }
  }
}

.breadcrumb__separator {
  font-family: handle;
  font-size: 12px;
  margin: 0 5px;
  vertical-align: middle;
}

.breadcrumb__item__inner {
  cursor: pointer;
}
</style>
