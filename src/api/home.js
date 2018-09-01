import request from '@/utils/request';

export const getList = (params) => request({
  url: '/goods/lists',
  method: 'get',
  params: params
});

export const getDetail = (id) => request({
  url: '/goods/detail/' + id,
  method: 'get'
});
