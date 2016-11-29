<template>
  <span v-el:trigger>
    <slot>
    </slot>
  </span>
  <div class="tooltip"
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
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
      <slot name="content">
        {{{content}}}
      </slot>
   </div>
  </div>
</template>

<script>
import PopoverMixin from '../mixins/popoverMixins.js';

export default {
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

<style>
.tooltip {
  opacity: .9
}
</style>
