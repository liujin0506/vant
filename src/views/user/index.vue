<template>
  <div class="user-index">
    <div class="head">
      <img class="user-poster" :src="Userbg">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="nickname">· 联盟ID <span>{{ union_id }}</span> ·</div>
    </div>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="京东联盟设置" is-link to="/user/bind"/>
      <van-cell icon="exchange" title="新手教程" is-link />
      <van-cell icon="gold-coin" title="我的佣金" is-link />
      <van-cell icon="gift" title="注册京粉" is-link />
      <van-cell icon="contact" title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import Userbg from '@/assets/user_bg.png';
import store from '@/store';

export default {
  data() {
    return {
      avatar: store.getters.avatar,
      union_id: store.getters.union_id,
      Userbg: Userbg
    };
  },
  created() {
    if (store.getters.union_id === '') {
      this.$router.push({ path: '/user/bind' });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-index {
  background: #e5e5e5;
  padding: 10px 20px 0 20px;
  min-height: calc(100vh - 50px);
  .head {
    position: relative;
    .user-poster {
      width: 100%;
      display: block;
    }
    .avatar {
      position: absolute;
      bottom: 55px;
      width: 100%;
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: solid 5px #fff;
      }
    }
    .nickname {
      position: absolute;
      bottom: 20px;
      width: 100%;
      color: #fff;
      text-align: center;
    }
  }
  .user-group {
    border: solid 1px #fff;
    border-top: none;
    border-bottom: none;
    margin-top: 20px;
    border-radius: 15px;
    .van-cell {
      border-radius: 15px;
    }
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
  }
}
</style>