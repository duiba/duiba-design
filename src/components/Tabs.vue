<template>
  <!-- Nav tabs -->
  <ul class="d-tabs cf" role="tablist">
    <template v-for="t in tabs">
      <li @click.prevent="select(t)">
        <a :class="{active: t.active}" href="javascript:void(0)">
          {{{t.header}}}
        </a>
      </li>
    </template>
  </ul>
  <div class="d-tab-content" v-el:tab-content>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'd-tabs',

  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: null,
      tabs: []
    };
  },
  created() {
    this._tabset = true;
  },
  watch: {
    active(val) {
      this.show = this.tabs[val];
    }
  },
  ready() {
    this.show = this.tabs[this.active];
  },
  methods: {
    select(tab) {
      if (!tab.disabled) {
        this.active = tab.index;
      }
    }
  }
};
</script>

<style lang="less">
.d-tabs {
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;

  li {
    font-size: 14px;
    position: relative;
    bottom: -1px;
    margin: 0 10px;
    float: left;
    line-height: 34px;

    &:first-child {
      margin-left: 0;        
    }

    &::before {
      content: '';
      position: absolute;
      top: 9px;
      right: -10px;
      height: 16px;
      border-right: 1px dashed #d8d8d8;
    }

    &:last-child::before {
      display: none;
    }

    a {
      display: block;
      border-bottom: 2px solid transparent;
      padding: 0 25px 0 15px;
      padding-right: 25px;
      position: relative;
      color: #888;
    }

    a.active {
      font-weight: normal;
      border-bottom: 2px solid #29b6b0;
      color: #444;
    }

    .iconhandle {
      font-size: 12px;
      position: absolute;
      top: -5px;
      right: 8px;
      color: #a5a5a5;

      &.active {
        color: #29b6b0;
      }
    }
  }
}

.d-tab-content {
  padding: 10px 0;
}
</style>

