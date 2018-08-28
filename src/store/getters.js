const getters = {
  sidebar: state => state.app.sidebar,
  footbar: state => state.app.footbar,
  device: state => state.app.device,
  token: state => state.auth.token,
  avatar: state => state.auth.avatar,
  userinfo: state => state.auth.userinfo
};
export default getters;
