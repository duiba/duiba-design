<template>
  <div role="tabpanel" class="d-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'd-tab',

  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active() {
      return this._tabset && this._tabset.show === this;
    },
    index() {
      return this._tabset.tabs.indexOf(this);
    }
  },
  created() {
    let tabset = this;

    while (tabset && tabset._tabset !== true && tabset.$parent) {
      tabset = tabset.$parent;
    }

    if (!tabset._tabset) {
      this._tabset = {};
      console.warn('Warning: "tab" depend on "tabset" to work properly.');
    } else {
      tabset.tabs.push(this);
      this._tabset = tabset;
    }
  },
  beforeDestroy() {
    if (this._tabset.active === this.index) {
      this._tabset.active = 0;
    }
    this._tabset.tabs.splice(this.index, 1);
  }
};
</script>
