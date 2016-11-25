<template>
  <section class="content">
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <demo-block>
      <div class="source" slot="source">
        <alert>
          xxx
        </alert>
      </div>
      <div class="highlight" slot="highlight">
        
      </div>
    </demo-block>
  </section>
</template>

<script>
import Alert from '../../src/components/Alert';

export default {
  components: {
    Alert
  }
};
</script>
