import request from '@/utils/request';

export const transLink = (link) => request({
  url: '/link/trans',
  method: 'post',
  data: { link: link }
});

export const sendWechat = (link) => request({
  url: '/link/send_wechat',
  method: 'post',
  data: { link: link }
});
