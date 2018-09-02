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
      Dialog.alert({
        message: message
      }).then(() => {
        // on close
      });
      return Promise.reject(error);
    }
);

export default service;
