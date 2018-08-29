import request from '@/utils/request';

export const OauthLogin = (params) => request({
  url: '/member/auth',
  method: 'get',
  params: params
});

export const getInfo = (token) => request({
  url: '/member/info',
  method: 'get'
});

export const logout = () => request({
  url: '/member/logout',
  method: 'post'
});
