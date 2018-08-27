<template>
  <div>
    <div class="head">
      <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <div class="avatar">
        <img src="https://avatars2.githubusercontent.com/u/7478813?s=40&v=4" alt="">
      </div>
      <div class="nickname">联盟ID 123456</div>
    </div>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="京东联盟设置" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange" title="新手教程" is-link />
      <van-cell icon="gold-coin" title="我的佣金" is-link />
      <van-cell icon="gift" title="注册京粉" is-link />
    </van-cell-group>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 1
    };
  },
  created() {
    // this.$toast('提示文案');
  }
};
</script>

<style lang="scss" scoped>
.head {
  position: relative;
  .user-poster {
    width: 100%;
    display: block;
  }
  .avatar {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }
  }
  .nickname {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
}
  
  .user-group {
    margin-bottom: .3rem;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
  }
</style>