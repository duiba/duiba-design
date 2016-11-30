<script>
export default {
  data() {
    return {
      currPage: 1
    };
  },

  methods: {
    onPageChange: function(page) {
      this.currPage = page;
      alert(page);
    }
  }
};
</script>

## Pagination 分页

当数据量过多时，使用分页分解数据。

### 基础用法

:::demo 需要设置数据总条数`total`，和当前分页数`currentPage`，以及监听页数变化的函数。
```html
<d-pagination :total="188" :current-page="currPage" @change="onPageChange"></d-pagination>

<script>
export default {
  data() {
    return {
      currPage: 1
    };
  },

  methods: {
    onPageChange: function(page) {
      this.currPage = page;
      alert(page);
    }
  }
};
</script>
```
:::

### Attributes

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| page-size | 每页显示条目个数 | Number | — | 10 |
| total | 总条目数 | Number | — | - |
| current-page | 当前页数 | Number | — | 1 |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | currentPage 改变时会触发 | 当前页`currentPage` |
