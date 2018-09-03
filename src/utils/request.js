import axios from 'axios';
import { Dialog } from 'vant';
import store from '../store';
import { getToken } from '@/utils/auth';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = 'Bearer ' + getToken();
  }
  return config;
}, error => {
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
      const token = response.headers.authorization;
      if (token) {
        // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
        store.dispatch('refreshToken', token);
      }
      const data = response.data;
      return data;
    },
    error => {
      const data = error.response.data;
      const message = data.message;
      if (error.response.status === 401) {
        Dialog.alert({
          message: '登录已过期'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      } else {
        Dialog.alert({
          message: message
        }).then(() => {
          // on close
        });
      }
      return Promise.reject(error);
    }
);

export default service;
