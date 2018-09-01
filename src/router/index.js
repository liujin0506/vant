import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/views/layout/Layout';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: []
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index'),
        name: 'home/index',
        meta: { title: '首页', icon: 'home', showFoot: true, auth: true, active: 'home' }
      }
    ]
  },
  {
    path: '/search',
    component: Layout,
    redirect: '/search/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/search/index'),
        name: 'search/index',
        meta: { title: '找货', icon: 'search', showFoot: true, auth: true, active: 'search' }
      }
    ]
  },
  {
    path: '/link',
    component: Layout,
    redirect: '/link/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/link/index'),
        name: 'link/index',
        meta: { title: '万能转链', icon: 'link', showFoot: true, showNav: true, auth: true, active: 'link' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index'),
        name: 'user/index',
        meta: { title: 'user', icon: 'user', showFoot: true, active: 'user' }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
];
