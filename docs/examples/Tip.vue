<template>
  <div class="component-tip">
    <tip>
      This is a tip.
    </tip>
    <tip :dismissable="false">
      This is a tip can not close.
    </tip>
  </div>
</template>

<script>
import Tip from 'src/components/Tip';

export default {
  components: {
    Tip
  }
};
</script>
