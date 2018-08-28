import request from '@/utils/request';

export const OauthLogin = (params) => request({
  url: '/wechat/auth',
  method: 'get',
  params: params
});

export const getInfo = (token) => request({
  url: '/wechat/userinfo',
  method: 'post'
});

export const logout = () => request({
  url: '/wechat/logout',
  method: 'post'
});
