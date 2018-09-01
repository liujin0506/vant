<template>
  <div class="link-index">
    <div class="input-area">
      <div class="title">请输入原始段子</div>
      <van-cell-group class="textarea">
        <van-field v-model="value" type="textarea" placeholder="" />
      </van-cell-group>
      <van-button type="danger" class="btn">一键转链</van-button>
    </div>
    <div class="result-area">
      <div class="title">可直接编辑</div>
      <van-cell-group>
        <van-field v-model="value" type="textarea" />
      </van-cell-group>
      <div class="footer"></div>
      <div class="btns">
        <div class="left">
          <van-button type="danger" size="small">发送到微信</van-button>
        </div>
        <div class="right">
          <van-button type="danger" size="small">一键复制</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkIndex',
  data() {
    return {
      value: ''
    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
  .link-index {
    min-height: calc(100vh - 136px);
    background: #e5e5e5;
    padding: 20px;
    .input-area {
      .title {
        color: #666;
        font-size: 12px;
      }
      .textarea {
        margin-top: 5px;
        border: solid 1px #ffffff;
        border-radius: 5px;
        textarea {
          height: 160px;
        }
      }
      .btn {
        margin-top: 10px;
        width: 100%;
      }
    }
    .result-area {
      margin-top: 5px;
      background: #ffffff;
      border-radius: 10px;
      position: relative;
      .title {
        border-radius: 10px 10px 0 0;
        font-size: 12px;
        text-align: center;
        color: #666;
        background: #eee;
        height: 24px;
        line-height: 24px;
      }
      textarea {
        height: 180px;
      }
      .footer {
        height: 30px;
      }
      .btns {
        position: absolute;
        bottom: -10px;
        width: 100%;
        .left,.right {
          width: 50%;
          float: left;
          text-align: center;
          button {
            width: 100px;
            border-radius: 20px;
          }
        }
      }
    }
    [class*=van-hairline]::after {
      border: none;
    }
  }
</style>