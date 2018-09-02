const getters = {
  sidebar: state => state.app.sidebar,
  footbar: state => state.app.footbar,
  device: state => state.app.device,
  token: state => state.auth.token,
  name: state => state.auth.name,
  avatar: state => state.auth.avatar,
  union_id: state => state.auth.union_id,
  userinfo: state => state.auth.userinfo
};
export default getters;
