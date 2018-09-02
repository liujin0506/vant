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

export const bindUnionid = (union_id) => request({
  url: '/member/bind',
  method: 'post',
  data: { union_id: union_id }
});

export const logout = () => request({
  url: '/member/logout',
  method: 'post'
});
