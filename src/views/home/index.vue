<template>
  <div class="home-index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img v-lazy="imgUrl + item.thumb" @click="link(item.link)"/>
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

export default {
  name: 'HomeIndex',
  components: { GoodsItem },
  data() {
    return {
      filter: {
        category_id: 0,
        is_recommend: 1,
        page: 1,
        keyword: '',
        per_page: 15
      },
      loading: false,
      finished: false,
      imgUrl: process.env.BASE_API + '/',
      list: [],
      swiper: []
    };
  },
  created() {
    this.getIndex();
  },
  methods: {
    async getIndex() {
      this.loading = true;
      this.$toast.loading({ duration: 0, forbidClick: true, message: '加载中...' });
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
      this.$toast.clear();
    },
    onLoad() {
      this.filter.page ++;
      this.getIndex();
    },
    onSearch() {
      this.filter.page = 1;
      this.getIndex();
    },
    link(url) {
      console.log(url);
      window.location.href = url;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-index {
  background: #ffffff;
  .van-swipe {
    width: 100%;
    height: 155px;
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