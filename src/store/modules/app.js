import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    footbar: [
        { title: '京选', icon: 'points-mall', link: '/', active: 'home' },
        { title: '找货', icon: 'search', num: 0, link: '/search/index', active: 'search' },
        { title: '转链', icon: 'exchange-record', link: '/link/index', active: 'link' },
        { title: '我的', icon: 'contact', link: '/user/index', active: 'user' }
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
