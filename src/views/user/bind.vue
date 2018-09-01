<template>
  <div class="user-bind">
    <div class="head">
      <img class="user-poster" :src="Userbg">
      <div class="nickname">联盟ID</div>
      <van-cell-group class="input">
        <van-field v-model="value" placeholder="请输入联盟ID" style="text-align:center;"/>
      </van-cell-group>
      <div class="btn">
        <van-button type="danger" size="small" >确定绑定</van-button>
      </div>

      <div class="text">
        <p>绑定联盟ID后</p>
        <p>每次推广将自动为您生成二合一推广链接</p>
      </div>
    </div>

    <div class="content">
      <div class="title">什么是联盟ID？</div>
      <div class="detail">
        联盟ID是用来识别京东联盟会员的ID账号，具有唯一性，可用户跟踪订单。
      </div>
      <div class="title">如何查看联盟ID？</div>
      <div class="detail">
        <p>
          <span>·</span>非注册京粉
        </p>
        <p style="padding-left:5px;"> 
          扫描二维码注册成为京粉
        </p>
        <p style="width:100%;text-align:center;">
          <img :src="Ewm" style="width:100px;margin:10px;">
        </p>
        <p>
          <span>·</span>注册京粉
        </p>
        <p style="padding-left:5px;">
          使用京东账号登陆“京粉”APP，进入“我”即可查看你的专属联盟ID。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Userbg from '@/assets/user_bg.png';
import Ewm from '@/assets/ewm.png';

export default {
  data() {
    return {
      value: '',
      Userbg: Userbg,
      Ewm: Ewm
    };
  },
  created() {
    // this.$toast('提示文案');
  }
};
</script>

<style lang="scss">
.user-bind {
  background: #e5e5e5;
  padding: 10px 20px 0 20px;
  min-height: calc(100vh - 50px);
  .head {
    background: #fff;
    border-radius: 15px;
    padding-top: 15px;
    position: relative;
    .user-poster {
      margin: 0 auto;
      width: calc(100% - 30px);
      display: block;
    }
    .nickname {
      position: absolute;
      top: 50px;
      width: 100%;
      color: #fff;
      text-align: center;
    }
    .input {
      position: absolute;
      top: 80px;
      width: 80%;
      left: 10%;
      border-radius: 5px;
      .van-cell {
        border-radius: 5px;
      }
    }
    .btn {
      margin-top: 8px;
      text-align: center;
      .van-button {
        width: 120px;
        font-size: 14px;
        border-radius: 15px;
      }
    }
    .text {
      margin: 8px 0;
      padding-bottom: 5px;
      text-align: center;
      font-size: 12px;
      color: #666;
      p{
        margin: 0;
      }
    }
  }
  .content {
    padding-top: 20px;
    .title {
      font-size: 15px;
      color: #df2828;
    }
    .detail {
      font-size: 13px;
      line-height: 20px;
      color: #666;
      margin: 3px 0 10px 0;
      p {
        margin: 0;
        span {
          color: #df2828;
        }
      }
    }
  }
}
</style>