import { OauthLogin, getInfo, logout } from '@/api/auth';
import { getToken, setToken, removeToken } from '@/utils/auth';

const auth = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    userinfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_USERINFO: (state, userinfo) => {
      state.userinfo = userinfo;
    }
  },
  actions: {
    OauthLogin({ commit }, code) {
      return new Promise((resolve, reject) => {
        OauthLogin(code).then(response => {
          const data = response;
          setToken(data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 用户刷新 token 成功，使用新的 token 替换掉本地的token
    refreshToken({ commit }, token) {
      return new Promise(resolve => {
        setToken(token);
        commit('SET_TOKEN', token);
        resolve();
      });
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response;
          commit('SET_NAME', data.user_info.nickname);
          commit('SET_USERINFO', data.user_info);
          commit('SET_AVATAR', data.user_info.avatar);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_NAME', '');
          commit('SET_USERINFO', {});
          commit('SET_AVATAR', '');
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};

export default auth;
