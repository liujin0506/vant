<template>
  <div>
    <van-card>
      <div slot="thumb" @click="goDetail">
        <img :src="thumb">
      </div>
      <div slot="title" @click="goDetail">
        <div class="title">
          <div class="commission">
            <div class="left">佣金</div>
            <div class="right">{{ commision }}%</div>
          </div>
          <span class="expire">有效期至 {{ endDay }}</span>
        </div>
      </div>
      <div slot="desc" @click="goDetail">
        <div class="desc">{{ title }}</div>
      </div>
      <div slot="tags" @click="goDetail">
        <div class="price">
          <span class="curr">￥{{ realPrice }}</span>
          <span class="real">￥{{ price }}</span>
        </div>
      </div>
      <div slot="footer">
        <van-button size="mini" @click="doSpread" :disabled="!button">一键推广</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
import store from '@/store';
import { onekeySpread } from '@/api/home';

export default {
  name: 'goods-item',
  data() {
    return {
      button: true
    };
  },

  props: {
    id: Number,
    thumb: String,
    title: String,
    price: [Number, String],
    realPrice: [Number, String],
    discount: [Number, String],
    endDay: String,
    commision: [Number, String]
  },

  methods: {
    doSpread() {
      if (store.getters.union_id === '') {
        this.$dialog.confirm({
          title: '提示',
          message: '您尚未绑定联盟ID，是否绑定？'
        }).then(() => {
          this.$router.push({ path: '/user/bind' });
        }).catch(() => {
          // on cancel
        });
        return false;
      }
      this.$toast.loading({ duration: 0, forbidClick: true, message: '加载中...' });
      onekeySpread(this.id, {}).then((res) => {
        this.$toast({
          message: '推广成功',
          forbidClick: true
        });
        this.button = false;
      });
    },
    goDetail() {
      const id = this.id;
      this.$router.push({ path: '/home/detail/' + id });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-card {
  margin: 10px;
  background: #ffffff;
  border-bottom: solid 1px #d3d3d3;
  .van-card__content {
    .title {
      width: 100%;
      height: 22px;
      line-height: 22px;
      .commission {
        width: 80px;
        float: left;
        border: solid 1px #E01D26;
        font-size: 13px;
        border-radius: 5px;
        text-align: center;
        .left {
          height: 20px;
          line-height: 22px;
          background: #E01D26;
          width: 50%;
          float: left;
          color: #ffffff;
        }
        .right {
          height: 20px;
          line-height: 22px;
          width: 50%;
          float: right;
          color: #E01D26;
        }
      }
      .expire {
        font-size: 12px;
        float: right;
        color: #666666;
      }
    }
    .desc {
      margin: 5px 0 3px 0;
      font-size: 14px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      bottom: 5px;
      position: absolute;
      .curr {
        color: #E01D26;
      }
      .real {
        font-size: 12px;
        color: #666666;
        text-decoration:line-through;
      }
    }
  }
  .van-card__footer {
    .van-button {
      color: #ffffff;
      background: #E01D26;
      border: solid 1px #E01D26;
      font-size: 13px;
      width: 58px;
      border-radius: 5px;
      height: 22px;
      line-height: 22px;
    }
    .van-button--disabled{
      color: #666;
      background: #eee;
      border: solid 1px #eee;
    }
  }
}
</style>
