import request from '@/utils/request';

export const getCategoryList = (params) => request({
  url: '/goods/category',
  method: 'get',
  params: params
});
