<template>
  <div class="search-index">
    <van-search
      v-model="filter.keyword"
      placeholder="请输入要搜索的宝贝标题或关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-tabs @click="switchTab">
      <van-tab title="全部" key="0"/>
      <van-tab v-for="cate in category" :title="cate.name" :key="cate.id"></van-tab>
    </van-tabs>
    <van-row class="sortable">
      <van-col span="8" class="item"
        :class="filter.sort_type === 'common' ? 'active' : ''"
      ><a @click="doSort('common')">综合</a></van-col>
      <van-col span="8" class="item"
        :class="filter.sort_type === 'repay' ? 'active' : ''"
      >
        <a @click="doSort('repay')">佣金
          <van-icon v-if="filter.sort_type === 'repay' && filter.sort === 'desc'" name="arraw-down" />
          <van-icon v-else-if="filter.sort_type === 'repay' && filter.sort === 'asc'" name="arraw-up" />
          <van-icon v-else name="arraw-both" />
        </a>
      </van-col>
      <van-col span="8" class="item"
        :class="filter.sort_type === 'price' ? 'active' : ''"
      >
        <a @click="doSort('price')">价格
          <van-icon v-if="filter.sort_type === 'price' && filter.sort === 'desc'" name="arraw-down" />
          <van-icon v-else-if="filter.sort_type === 'price' && filter.sort === 'asc'" name="arraw-up" />
          <van-icon v-else name="arraw-both" />
        </a>
      </van-col>
    </van-row>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <goods-item 
      v-if="list.length > 0"
      v-for="(item, index) in list"
      :key="index"
      :id="item.id"
      :title="item.goods_name"
      :thumb="item.img_url"
      :endDay="item.end_day"
      :commision="item.commision_ratio_wl"
      :price="item.wl_unit_price"
      :realPrice="item.real_price"
      :discount="item.discount"
      ></goods-item>
      <div class="no-item" v-if="list.length === 0">
        <van-icon name="info-o" size="60px"/>
        <div class="text">暂无商品</div>
      </div>
    </van-list>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem';
import { getList } from '@/api/home';
import { getCategoryList } from '@/api/category';

export default {
  name: 'SearchIndex',
  components: { GoodsItem },
  data() {
    return {
      category: [],
      loading: false,
      finished: false,
      imgUrl: process.env.BASE_API + '/',
      list: [],
      filter: {
        category_id: 0,
        keyword: '',
        page: 1,
        per_page: 10,
        sort_type: 'common',
        sort: 'asc'
      }
    };
  },
  created() {
    this.getIndex();
    this.getCategoryList();
  },
  methods: {
    async getIndex() {
      this.loading = true;
      this.$toast.loading({ duration: 0, forbidClick: true, message: '加载中...' });
      const data = await getList(this.filter);
      if (data.current_page === 1) {
        this.list = data.data;
      } else {
        data.data.forEach((item) => {
          this.list.push(item);
        });
      }
      if (this.list.length >= data.total) {
        this.finished = true;
      }
      this.loading = false;
      this.$toast.clear();
    },
    async getCategoryList() {
      const category = await getCategoryList({ is_recommend: 1, parend_id: 0 });
      this.category = category;
    },
    onLoad() {
      this.filter.page ++;
      this.getIndex();
    },
    onSearch() {
      this.filter.page = 1;
      this.getIndex();
    },
    switchTab(index, title) {
      this.filter.category_id = 0;
      if (index !== 0) {
        this.category.forEach((cate, i) => {
          if (i === index - 1) {
            this.filter.category_id = cate.id;
          }
        });
      }
      this.getIndex();
    },
    doSort(type) {
      if (this.filter.sort_type !== type) {
        this.filter.sort = 'asc';
      }
      this.filter.sort_type = type;
      if (this.filter.sort_type !== 'common') {
        this.filter.sort = this.filter.sort === 'asc' ? 'desc' : 'asc';
      }
      this.filter.page = 1;
      this.getIndex();
    }
  }
};
</script>

<style lang="scss" scoped>
.search-index {
  background: #ffffff;
  .van-swipe {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
    }
  }
  .sortable {
    .item {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 13px;
      a {
        display: block;
        width: 100%;
      }
    }
    .active {
      color: #E01D26;
      font-weight: bold;
    }
  }
  .no-item {
    width: 100%;
    padding: 80px 0;
    text-align: center;
    color: #b5aeae;
    .text {
      font-size: 14px;
    }
  }
}
</style>