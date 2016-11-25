<template>
  <div class="page-container">
    <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navConfig from './nav.config.json';

export default {
  data() {
    return {
      navConfig: navConfig
    };
  }
};
</script>

<style lang="less">
.page-container {
  width: 1140px;
  padding: 0 30px;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
    line-height: 40px;
  }
  h3 {
    font-size: 22px;
  }
  h2, h3, h4, h5 {
    font-weight: normal;
    color: #1f2f3d;

    &:hover a {
      opacity: .4;
    }

    a {
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer;

      &:hover {
        opacity: .4;
      }
    }
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    margin-top: 14px 0;
  }
}

.page-content {
  width: 75%;
  float: left;
}
</style>
