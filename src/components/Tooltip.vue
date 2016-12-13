<template>
  <span v-el:trigger>
    <slot>
    </slot>
  </span>
  <div class="d-tooltip"
    v-bind:class="{
      'top':     placement === 'top',
      'left':    placement === 'left',
      'right':   placement === 'right',
      'bottom':  placement === 'bottom',
      'disable': type === 'disable',
      'delete':  type === 'delete'
    }"
    v-el:popover
    v-show="show"
    role="tooltip">
    <div class="d-tooltip-arrow"></div>
    <div class="d-tooltip-inner">
      <slot name="content">
        {{{content}}}
      </slot>
   </div>
  </div>
</template>

<script>
import PopoverMixin from '../mixins/popoverMixins.js';

export default {
  name: 'd-tooltip',

  mixins: [PopoverMixin],

  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    placement: {
      type: String,
      default: 'top'
    },
    type: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="less">
// tooltip
// Tooltip max width
@tooltip-max-width:            200px;
// Tooltip text color
@tooltip-color:                #fff;
// Tooltip background color
@tooltip-bg:                   #29B6B0;
@tooltip-opacity:              .9;
// Tooltip arrow width
@tooltip-arrow-width:          5px;
// Tooltip arrow color
@tooltip-arrow-color:          @tooltip-bg;
@zindex-tooltip:               1070;
@tooltip-border-radius:        20px;
@font-size-small:              12px;
@font-family: "Hiragino Sans GB","Helvetica Neue",Helvetica,"Microsoft Yahei",STHeiTi,Arial,sans-serif;
@line-height-base:             1.428571429; // 20/14

// Base class
.d-tooltip {
  position: absolute;
  z-index: @zindex-tooltip;
  display: block;
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  font-family: @font-family;
  // We deliberately do NOT reset font-size.
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: @line-height-base;
  text-align: left; // Fallback for where `start` is not supported
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: @font-size-small;
  opacity: @tooltip-opacity;

  &.top    { margin-top:  -3px; padding: @tooltip-arrow-width 0; }
  &.right  { margin-left:  3px; padding: 0 @tooltip-arrow-width; }
  &.bottom { margin-top:   3px; padding: @tooltip-arrow-width 0; }
  &.left   { margin-left: -3px; padding: 0 @tooltip-arrow-width; }
}

// Wrapper for the tooltip content
.d-tooltip-inner {
  max-width: @tooltip-max-width;
  padding: 3px 8px;
  color: @tooltip-color;
  text-align: center;
  background-color: @tooltip-bg;
  border-radius: @tooltip-border-radius;
}

// Arrows
.d-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.d-tooltip {
  &.top .d-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -@tooltip-arrow-width;
    border-width: @tooltip-arrow-width @tooltip-arrow-width 0;
    border-top-color: @tooltip-arrow-color;
  }
  &.right .d-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -@tooltip-arrow-width;
    border-width: @tooltip-arrow-width @tooltip-arrow-width @tooltip-arrow-width 0;
    border-right-color: @tooltip-arrow-color;
  }
  &.left .d-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -@tooltip-arrow-width;
    border-width: @tooltip-arrow-width 0 @tooltip-arrow-width @tooltip-arrow-width;
    border-left-color: @tooltip-arrow-color;
  }
  &.bottom .d-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -@tooltip-arrow-width;
    border-width: 0 @tooltip-arrow-width @tooltip-arrow-width;
    border-bottom-color: @tooltip-arrow-color;
  }
}

.delete.top {
  .d-tooltip-inner {
    background-color: #ff795c;
  }

  .d-tooltip-arrow {
    border-top-color: #ff795c;
  }
}

.disable.top {
  .d-tooltip-inner {
    background-color: #eee;
    border-radius: 6px;
    color: #888;
  }

  .d-tooltip-arrow {
    border-top-color: #eee;
  }
}
</style>
