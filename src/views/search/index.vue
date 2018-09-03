<template>
  <div class="search-index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img v-lazy="imgUrl + item.thumb" />
      </van-swipe-item>
    </van-swipe>
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
      swiper: [],
      filter: {
        category_id: 0,
        keyword: '',
        page: 1,
        per_page: 10
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
      const data = await getList(this.filter);
      if (data.current_page === 1) {
        if (data.swiper && data.swiper.length > 0) {
          this.swiper = data.swiper;
        }
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