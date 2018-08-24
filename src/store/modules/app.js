import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    footbar: [
        { title: '首页', icon: 'home', link: '/' },
        { title: '个人中心', icon: 'contact', num: 0, link: '/user' }
    ],
    device: 'wechat',
    contentHeight: 0
  },
  mutations: {

  },
  actions: {

  }
};

export default app;
