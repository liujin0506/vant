import request from '@/utils/request';

export const getIndex = (params) => request({
  url: '/home/index',
  method: 'get',
  params: params
});