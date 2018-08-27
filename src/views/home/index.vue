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
    <goods-item></goods-item>
    <goods-item></goods-item>
    <goods-item></goods-item>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem';

export default {
  name: 'HomeIndex',
  components: { GoodsItem },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
      ],
      search: ''
    };
  },
  methods: {
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