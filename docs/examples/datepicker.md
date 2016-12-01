<style lang="less">
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 14px;

  &:focus {
    outline: 0;
    border-color: #a8e7e7;
  }
}
</style>

<script>
export default {
  data() {
    return {
      date: '',
      start: '',
      end: ''
    };
  },

  methods: {
    disabledDate: function(date) {
      var now = new Date();
      var currHour = now.getHours();
      now.setHours(0);
      date.setHours(currHour);
      return date.getTime() <= now.getTime();
    }
  }
};
</script>

## DatePicker 日期选择器

用于选择或输入日期。

### 基础用法

最基础的选择天。

:::demo 基本用法只需双向绑定`value`属性即可，输出格式为`yyyy-MM-dd`，你也可以传入`format`属性为自己想要的输出格式。
```html
<d-datepicker :value.sync="date" placeholder="请选择时间"></d-datepicker>

<script>
export default {
  data() {
    return {
      date: ''
    };
  }
};
</script>
```
:::

### 禁用日期

你可以选择禁用某些日期，比如今天以前。

:::demo 传入一个`disabledDate`的函数，来处理禁用日期逻辑，这个处理函数接受当前日期为参数。
```html
<d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate"></d-datepicker>

<script>
export default {
  data() {
    return {
      date: ''
    };
  },

  methods: {
    disabledDate: function(date) {
      var now = new Date();
      var currHour = now.getHours();
      now.setHours(0);
      date.setHours(currHour);
      return date.getTime() <= now.getTime();
    }
  }
};
</script>
```
:::

### 时间选择

精确到时的时间选择。

:::demo 时间精确到时，也就是整点时间。传入一个`time`属性即可。
```html
<d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate" format="yyyy-MM-dd hh:ii" time></d-datepicker>

<script>
export default {
  data() {
    return {
      date: ''
    };
  },

  methods: {
    disabledDate: function(date) {
      var now = new Date();
      var currHour = now.getHours();
      now.setHours(0);
      date.setHours(currHour);
      return date.getTime() <= now.getTime();
    }
  }
};
</script>
```
:::

### 分选择

可以选择精确到分的时间。

:::demo 时间精确到分。需传入一个`time`和`minute`属性。
```html
<d-datepicker :value.sync="date" placeholder="请选择时间" :disabled-date="disabledDate" format="yyyy-MM-dd hh:ii" time minute></d-datepicker>

<script>
export default {
  data() {
    return {
      date: ''
    };
  },

  methods: {
    disabledDate: function(date) {
      var now = new Date();
      var currHour = now.getHours();
      now.setHours(0);
      date.setHours(currHour);
      return date.getTime() <= now.getTime();
    }
  }
};
</script>
```
:::

### 时间区间

可以选择一个时间区间。

:::demo 可以使用`d-daterangepicker`元素显示一个时间区间。
```html
<d-daterangepicker :start.sync="start" :end.sync="end" placeholder="请选择时间" :error-show="true" :range="7"></d-daterangepicker>

<script>
export default {
  data() {
    return {
      start: '',
      end: ''
    };
  }
};
</script>
```
:::

### Datepicker Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 选中的日期值    | string   |  — | -   |
| format  | 日期输出格式    | string   |  — | yyyy-MM-dd   |
| disabledDate  | 禁用日期逻辑函数    | Function   |  — | -   |
| placeholder  | placeholder    | string   |  — | -   |
| time  | 是否可以选中时间    | boolean   |  — | false   |
| minute  | 是否可以选中分    | boolean   |  — | false   |
| rangeflag  | 是否为日期间隔选择    | boolean   |  — | false   |

### Daterangepicker Attributes

部分属性同上面的`Datepicker`的属性。

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| start  | 选中的开始日期   | string   |  — | 今天   |
| end  | 选中的结束日期    | string   |  — | 今天   |
| range  | 最多选择的日期间隔，比如7天    | number   |  — | -   |
| errorShow  | 是否显示错误提示    | boolean   |  — | false   |
