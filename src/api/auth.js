import request from '@/utils/request';

export const OauthLogin = (params) => request({
  url: '/wechat/auth',
  method: 'get',
  params: params
});
