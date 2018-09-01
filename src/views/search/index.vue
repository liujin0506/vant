<template>
  <div class="home-index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
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
    <van-tabs>
      <van-tab v-for="index in 8" :title="'分类' + index" :key="index"></van-tab>
    </van-tabs>
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
  name: 'SearchIndex',
  components: { GoodsItem },
  data() {
    return {
      list: [],
      loading: false,
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
      ],
      filter: {
        page: 1,
        per_page: 10
      },
      search: ''
    };
  },
  created() {
    this.getIndex();
  },
  methods: {
    async getIndex() {
      this.loading = true;
      const data = await getList(this.filter);
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