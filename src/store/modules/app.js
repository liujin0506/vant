import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    footbar: [
        { title: '京选', icon: 'points-mall', link: '/' },
        { title: '找货', icon: 'search', link: '/' },
        { title: '转链', icon: 'exchange-record', link: '/' },
        { title: '我的', icon: 'contact', num: 0, link: '/user' }
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
