<template>
  <div class="home-index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img v-lazy="imgUrl + item.thumb" />
      </van-swipe-item>
    </van-swipe>
    <van-search
      v-model="search"
      placeholder="请输入要搜索的宝贝标题或关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <goods-item 
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
      imgUrl: process.env.BASE_API + '/',
      list: [],
      swiper: [],
      search: ''
    };
  },
  created() {
    this.getIndex();
  },
  methods: {
    async getIndex() {
      this.loading = true;
      const data = await getList();
      if (data.current_page === 1 && data.swiper.length > 0) {
        this.swiper = data.swiper;
      }
      this.list = data.data;
      this.loading = false;
    },
    onSearch() {

    }
  }
};
</script>

<style lang="scss" scoped>
.home-index {
  background: #ffffff;
  .van-swipe {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
    }
  }
}
</style>