<template>
  <div class="pagination">
    <div class="total-count">共{{total}}条</div>
    <ul class="pagination-list" @click="onPagerClick">
      <li class="iconhandle number prev" v-if="currentPage !== 1">
        &#xe612;
      </li>
      <li
      :class="{ active: currentPage === 1 }"
      v-if="pageCount > 0"
      class="number">1</li>
      <li
        class="point"
        v-if="showPrevDot">
        <span>...</span>
      </li>
      <li
        v-for="pager in pagers"
        :class="{ active: currentPage === pager }"
        class="number">{{ pager }}</li>
      <li
        class="point"
        v-if="showNextDot">
        <span>...</span>
      </li>
      <li
        :class="{ active: currentPage === pageCount }"
        class="number"
        v-if="pageCount > 1">{{ pageCount }}</li>
      <li class="iconhandle number next" v-if="currentPage !== pageCount">
        &#xe619;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'd-pagination',

  props: {
    /**
     * 数据总条数
     */
    total: {
      required: true,
      type: Number
    },
    /**
     * 每页数据条数，默认十条
     */
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * 当前页
     */
    currentPage: {
      type: Number,
      default: 1
    }
  },

  computed: {
    /**
     * 数据的总页数
     */
    pageCount: function() {
      return Math.ceil(this.total / this.pageSize);
    },
    /*
     * 显示的页码
     */
    pagers: function() {
      const pagerCount = 7;

      const currentPage = Number(this.currentPage);
      const pageCount = Number(this.pageCount);

      let showPrevDot = false;
      let showNextDot = false;

      // 如果页数大于7则会显示对应的 `...`
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 2) {
          showPrevDot = true;
        }

        if (currentPage < pageCount - 2) {
          showNextDot = true;
        }
      }

      const array = [];

      if (showPrevDot && !showNextDot) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevDot && showNextDot) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevDot && showNextDot) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }

      this.showPrevDot = showPrevDot;
      this.showNextDot = showNextDot;

      return array;
    }
  },

  data() {
    return {
      showPrevDot: false,
      showNextDot: false
    };
  },

  methods: {
    onPagerClick: function(event) {
      const target = event.target;
      if (target.tagName.toUpperCase() === 'UL') {
        return;
      }

      let newPage = Number(event.target.textContent);
      const currentPage = this.currentPage;

      if (target.className.indexOf('prev') !== -1) {
        newPage = currentPage - 1;
      } else if (target.className.indexOf('next') !== -1) {
        newPage = currentPage + 1;
      }

      if (newPage !== currentPage) {
        this.$emit('change', newPage);
      }
    }
  }
};
</script>

<style lang="less">
.pagination {
  overflow: hidden;
  background-color: #e8e7e2;
  line-height: 28px;
  padding: 8px 20px;
}

.total-count {
  float: left;
  font-size: 14px;
}

.pagination-list {
  float: right;
  margin: 2px 0 0;

  .number,
  .point {
    float: left;
    padding: 0 6px;
    min-width: 12px;
    line-height: 22px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #fff;
    color: #444;
    font-size: 12px;
    margin-right: 8px;
    cursor: pointer;

    &.active {
      background-color: #444;
      border-color: #444;
      color: #fff;
    }
  }

  .point {
    background-color: transparent;
    border: 0;
    font-size: 14px;

    span {
      position: relative;
      top: -3px;
    }
  }
}
</style>

