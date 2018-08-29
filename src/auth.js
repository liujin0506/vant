import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {
  getToken,
  getRedirectUri,
  setRedirectUri,
  removeRedirectUri,
  getRedirectRoute,
  setRedirectRoute,
  removeRedirectRoute,
  getAuthCode,
  setAuthCode
} from '@/utils/auth';
import { title, getAuthUrl, getQueryString } from '@/utils';
import { Dialog, Toast } from 'vant';

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  title(to.meta.title);
  const query = to.query;
  let code = '';
  let state = '';
  if (query && query.code) {
    code = query.code;
    state = query.state;
  }
  if (!code) {
    code = getQueryString('code');
  }
  if (code && code !== getAuthCode()) {
    setAuthCode(code);
    store.dispatch('OauthLogin', { code: code, state: state }).then(() => {
      const path = getRedirectRoute();
      next({ path: path });
      removeRedirectUri();
      removeRedirectRoute();
    }).catch(() => {
      Dialog.alert({
        message: '授权登录失败，请重试~'
      }).then(() => {
        window.location.href = getRedirectUri();
      });
    });
    return;
  }
  if (getToken()) {
    if (store.getters.name === '') {
      store.dispatch('GetInfo', { code: code, state: state }).then(() => {
        next();
      }).catch((err) => {
        Toast(err);
      });
    } else {
      next();
    }
  } else {
    const url = getAuthUrl(encodeURIComponent(window.location.href));
    setRedirectUri(url);
    setRedirectRoute(to.path);
    window.location.href = url;
  }
});

router.afterEach(() => {
  NProgress.done();
});
