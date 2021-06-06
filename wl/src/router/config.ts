import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import RouteGuard from './RouteGuard';
import Page404 from './404';

const routes: RouteConfig[] | undefined = [
  {
    path: '/index',
    exact: true,
    name: '首页',
    icon: '',
    component: lazy(() => import('src/pages/heavens/index')),
  },
  {
    path: '/bookstore',
    exact: true,
    name: '三味书屋',
    icon: 'UnorderedListOutlined',
    component: lazy(() => import('src/pages/heavens/index')),
  },
  {
    name: '百草堂',
    path: '/cottage',
    exact: true,
    hidden: true,
    icon: 'UnorderedListOutlined',
    component: lazy(() => import('src/pages/heavens/index')),
  },
  {
    name: '天庭',
    path: '/heavens',
    exact: false,
    icon: 'UnorderedListOutlined',
    component: RouteGuard as any,
    routes: [
      {
        name: '瑶池',
        path: '/heavens/jadePool',
        exact: true,
        icon: 'UnorderedListOutlined',
        component: lazy(() => import('src/pages/heavens/index')),
      },
      {
        name: '三清宫',
        path: '/heavens/sanqing',
        exact: true,
        icon: 'UnorderedListOutlined',
        component: lazy(() => import('src/pages/heavens/index')),
      }
    ]
  },
  {
    path: '/*',
    component: Page404
  }
];

export default routes;
