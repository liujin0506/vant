export function shareJs(jssdk, options) {
  const wx = require('weixin-js-sdk');
  wx.config({
    debug: jssdk.debug,
    appId: jssdk.appId,
    timestamp: parseInt(jssdk.timestamp),
    nonceStr: jssdk.nonceStr,
    signature: jssdk.signature,
    jsApiList: jssdk.jsApiList
  });
  var defaults = {
    title: '京好赚',
    desc: '京好赚',
    link: location.href, // 分享页面地址,不能为空
    imgUrl: jssdk.share_img, // 分享是封面图片，不能为空
    success: function() {}, // 分享成功触发
    cancel: function() {} // 分享取消触发，需要时可以调用
  };
  options = Object.assign({}, defaults, options);
  wx.ready(function() {
    var thatopts = options;
    wx.onMenuShareTimeline({
      title: thatopts.title, // 分享标题
      desc: thatopts.desc, // 分享描述
      link: thatopts.link, // 分享链接
      imgUrl: thatopts.imgUrl, // 分享图标
      success: function() {
        // alert("成功");
      },
      cancel: function() {
        // alert("失败")
      }
    });
    wx.onMenuShareAppMessage({
      title: thatopts.title, // 分享标题
      desc: thatopts.desc, // 分享描述
      link: thatopts.link, // 分享链接
      imgUrl: thatopts.imgUrl, // 分享图标
      success: function() {
        // alert("成功");
      },
      cancel: function() {
        // alert("失败")
      }
    });
  });
};
