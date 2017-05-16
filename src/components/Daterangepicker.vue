<template>
  <div class="date-range">
    <datepicker :value.sync="myStart" :rangeflag="true" :on-change="selectDate('myStart')" placeholder="起始时间" :disabled-date="disabledDate" :width="width">
    </datepicker>
    <span class="range-split">-</span>
    <datepicker :value.sync="myEnd" :rangeflag="true" :on-change="selectDate('myEnd')" placeholder="结束时间" :disabled-date="disabledDate" :width="width">
    </datepicker>
    <p class="date-range-error" v-show="errorTip">{{errorTip}}</p>
  </div>
</template>

<script>
import datepicker from './Datepicker';
import { formatDate } from '../utils/dateUtils';

export default {
  name: 'd-daterangepicker',

  components: {
    datepicker
  },

  props: {
    start: {
      type: String,
      default: formatDate()
    },
    end: {
      type: String,
      default: formatDate()
    },
    range: {
      type: Number,
      default: null
    },
    disabledDate: {
      type: Function,
      default: () => {
      }
    },
    errorShow: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '200px'
    }
  },

  watch: {
    myStart() {
      var startTime = new Date(this.myStart);
      var endTime = new Date(this.myEnd);
      if (startTime.getTime() > endTime.getTime()) {
        this.myEnd = this.myStart;
      }
      this.$emit('update:start', this.myStart);
    },
    myEnd() {
      var startTime = new Date(this.myStart);
      var endTime = new Date(this.myEnd);
      if (endTime.getTime() < startTime.getTime()) {
        this.myStart = this.myEnd;
      }
      this.$emit('update:end', this.myEnd);
    }
  },

  data() {
    return {
      errorTip: '',
      myStart: this.start,
      myEnd: this.end
    };
  },

  methods: {
    selectDate: function(type) {
      return (date) => {
        if (!this.range) {
          return;
        }
        var oneDay = 24 * 60 * 60 * 1000;
        var startTime = new Date(this.myStart);
        var endTime = new Date(this.myEnd);
        var range;
        if (type === 'start') {
          range = Math.round(Math.abs((endTime.getTime() - date.getTime()) / (oneDay)));
        } else {
          range = Math.round(Math.abs((date.getTime() - startTime.getTime()) / (oneDay)));
        }
        // 选择的是起始时间，且区间大于range
        if (range > this.range) {
          if (this.errorShow) {
            this.errorTip = '时间范围不能超过' + this.range + '天';
          } else {
            if (type === 'start') {
              endTime.setDate(endTime.getDate() - (range - this.range));
              this.myEnd = formatDate(endTime);
            } else {
              startTime.setDate(startTime.getDate() + (range - this.range));
              this.myStart = formatDate(startTime);
            }
          }
        } else {
          this.errorTip = '';
        }
      };
    }
  }
};
</script>

<style lang="less">
.date-range {
  position: relative;
  border: 1px solid #ccc;
  display: inline-block;
  background-color: #fff;
  height: 32px;
  border-radius: 2px;
  &:hover {
     border-color: #888;
  }
  .range-split {
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    line-height: 16px;
  }
  .datepicker .form-control {
    border: 0;
    height: 32px;
    line-height: 32px;
  }
  .date-range-error {
    font-size: 12px;
    color: #ff795c;
    margin-top: 10px;
    line-height: 1.5;
    position: absolute;
    bottom: -20px;
    left: 0;
  }
}
</style>
