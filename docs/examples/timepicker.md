<script>
export default {
  data() {
    return {
      time: {
        HH: '01',
        mm: '01',
        ss: '01'
      }
    };
  }
};
</script>

## TimePicker 时间选择器

用于时间选择。

### 基础用法

:::demo 默认的`format`为`HH:mm`，可以设置一个自定义的`format`，还需要设置一个`time-value`的双向绑定来同步设置的时间。具体用法请看[Vue Timepicker](https://phoenixwong.github.io/vue-timepicker/)
```html
<d-timepicker format="HH:mm:ss" :time-value.sync="time"></d-timepicker>

<script>
export default {
  data() {
    return {
      time: {
        HH: '01',
        mm: '01',
        ss: '01'
      }
    };
  }
};
</script>
```
:::
