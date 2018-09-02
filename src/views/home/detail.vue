<template>
  <div class="home-detail">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div class="title">
        <div class="commission">
          <div class="left">佣金</div>
          <div class="right">{{detail.commision_ratio_wl}}%</div>
        </div>
        {{ detail.goods_name }}
      </div>
      <div class="price">
        <van-tag type="danger">券后价</van-tag> {{ detail.real_price }} <span class="unit">元</span>
      </div>
      <van-button type="danger" class="btn" v-if="unionid !== ''">一键推广</van-button>
      <van-button type="danger" class="btn" v-if="unionid === ''">确认绑定</van-button>
      <van-button type="danger" class="btn" plain>原始文案</van-button>
    </div>
  </div>
</template>

<script>
import { getDetail } from '@/api/home';
import store from '@/store';

export default {
  data() {
    return {
      unionid: store.getters.union_id,
      loading: false,
      detail: {
        goods_name: '加载中...'
      },
      images: []
    };
  },
  created() {
    this.getDetailData();
  },
  methods: {
    getDetailData() {
      this.loading = true;
      getDetail(this.$route.params.id).then((res) => {
        this.detail = res;
        this.images[0] = res.img_url;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss">
.home-detail {
  background: #ffffff;
  .van-swipe {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
    }
  }
  .content {
    padding: 20px 20px 0 20px;
    .title {
      border-bottom: solid 1px #dcdcdc;
      padding: 10px 0;
      line-height: 26px;
      font-size: 16px;
      .commission {
        margin-right: 5px;
        height: 20px;
        line-height: 20px;
        width: 80px;
        float: left;
        border: solid 1px #E01D26;
        font-size: 13px;
        border-radius: 5px;
        text-align: center;
        .left {
          background: #E01D26;
          width: 50%;
          float: left;
          color: #ffffff;
        }
        .right {
          width: 50%;
          float: right;
          color: #E01D26;
        }
      }
    }
    .price {
      font-size: 22px;
      height: 45px;
      line-height: 45px;
      color: #E01D26;
      .van-tag--danger {
        font-size: 18px;
        background: #E01D26;
      }
      .unit {
        font-size: 14px;
      }
    }
    .btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>