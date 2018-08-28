import request from '@/utils/request';

export const MidiaCloudLogin = (token) => request({
  url: '/user/auto_login',
  method: 'post',
  data: { token: token }
});
