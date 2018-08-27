<template>
  <div>
    <van-card
      title="标题"
      desc="描述"  
      num="2"
      price="2.00"
      :thumb="imageURL"
    >
      <div slot="title">
        <div class="title">
          <div class="commission">
            <div class="left">佣金</div>
            <div class="right">20%</div>
          </div>
          <span class="expire">有效期至 08-08</span>
        </div>
      </div>
      <div slot="desc">
        <div class="desc">标题标题标题标题标题标题标题标题标题标题标题标题</div>
      </div>
      <div slot="tags">
        <div class="price">
          <span class="curr">￥9.9</span>
          <span class="real">￥19.9</span>
        </div>
      </div>
      <div slot="footer">
        <van-button size="mini">一键推广</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>

export default {
  name: 'goods-item',
  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    };
  },
  props: {

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
      width: 58px;
      border-radius: 5px;
    }
  }
}
</style>
