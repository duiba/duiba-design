<template>
  <div class="page-container">
    <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css';
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
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  overflow: auto;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

a {
  color: #4078c0;
  text-decoration: none;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #f9fafc;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}

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
