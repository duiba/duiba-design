<template>
<div class="select-group" :class="{open: show}" ref="container" :disabled="disabled">
  <a class="select-toggle" ref="trigger">
    {{selectItem && selectItem[labelName]}}
    <i class="iconhandle">&#xe618;</i>
  </a>
  <ul class="select-menu" v-show="!disabled && show">
    <template v-if="options.length">
      <li v-for="option in options" :id="option.id || option[idName]" :class="{'active': isSelected(option)}">
        <a @mousedown.prevent="select(option.id || option[idName])">
          <i class="iconhandle" v-show="isSelected(option)">&#xe610;</i>
          {{ option.label || option[labelName] }}
        </a>
      </li>
    </template>
  </ul>
</div>
</template>

<script>
/* eslint-disable no-extra-boolean-cast */
import EventListener from '../utils/EventListener.js';

export default {
  name: 'd-select',

  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    idName: {
      type: String,
      default: 'id'
    },
    labelName: {
      type: String,
      default: 'label'
    },
    value: {},
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    const triger = this.$refs.trigger;
    const container = this.$refs.container;
    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', (e) => {
        this.show = true;
      });
      this._mouseleaveEvent = EventListener.listen(container, 'mouseleave', (e) => {
        this.show = false;
      });
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggleDropdown);
      this._documentEvent = EventListener.listen(document, 'click', () => {
        this.show = false;
      });
    }
  },
  computed: {
    selectItem() {
      if (!!this.value) {
        let item = this.options.filter((item) => {
          return (item.id || item[this.idName]) === this.value;
        });
        return item && item[0];
      } else {
        let first = this.options[0];
        let val = this.idName ? (first && first[this.idName]) : (first && first.id);
        this.$emit('update:value', val);
        return first;
      }
    }
  },
  methods: {
    /**
     * 选中某个值
     */
    select(v) {
      this.$emit('update:value', v);
      this.toggleDropdown();
      this.$emit('select', v);
    },
    /**
     * 当前是否选中
     */
    isSelected(option) {
      if (!this.value) {
        return this.options.indexOf(option) === 0;
      }
      return this.value === (option.id || option[this.idName]);
    },
    /**
     * 切换下拉框
     */
    toggleDropdown(e) {
      if (e) {
        e.stopPropagation();
      }
      this.show = !this.show;
    }
  },
  beforeDestory() {
    if (this._mouseenterEvent) {
      this._mouseenterEvent.remove();
      this._mouseleaveEvent.remove();
    }
    if (this._clickEvent) {
      this._clickEvent.remove();
    }
  }
};
</script>

<style lang="less">
.select-group {
  width: 195px;
  position: relative;
  display: inline-block;

  &.disabled,
  &[disabled] {
    .select-toggle{
      color:#d8d8d8;
      cursor: not-allowed;
      background: #f4f4f4;
      border-color: #ececec;
    }
  }
}

.select-toggle {
  display: block;
  border: 1px solid #ccc;
  background-color: #fff;
  line-height: 32px;
  font-size: 14px;
  color: #444;
  padding: 0 26px 0 14px;
  position: relative;
  cursor: pointer;
  border-radius: 2px;

  .iconhandle {
    color: #888;
    font-size: 12px;
    position: absolute;
    right: 14px;
  }

  &:hover {
    border-color: #888;

    .iconhandle{
      color: #444;
    }
  }

}

.select-menu {
  border: 1px solid #dedede;
  background-color: #fff;
  width: 100%;
  max-height: 180px;
  overflow-y: auto;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 34px;
  z-index: 9999;
  border-radius:  0 0 4px 4px;

  li {
    border-bottom: 1px solid #ccc;

    &:last-child {
      border: 0;
    }

    &.active a,
    &.active .iconhandle{
      color: #444;
    }
  }

  a {
    display: block;
    position: relative;
    padding-left: 32px;
    line-height: 32px;
    font-size: 14px;
    cursor: pointer;
    color: #888;

    &:hover {
      background-color: #f9f9f9;
      color: #444;
    }
  }

  .iconhandle {
    font-size: 12px;
    position: absolute;
    left: 14px;
  }
}
</style>
