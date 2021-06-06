import IMenuProps from './menu-d';
const menuList: Array<IMenuProps> = [
  {
    title: '首页',
    path: '/index',
    icon: 'UnorderedListOutlined',
  },
  {
    title: '三味书屋',
    path: '/bookstore',
    icon: 'UnorderedListOutlined',
  },
  {
    title: '百草堂',
    path: '/cottage',
    icon: 'UnorderedListOutlined',
  },
  {
    title: '天庭',
    path: '/heavens',
    icon: 'UnorderedListOutlined',
    children: [
      {
        title: '瑶池',
        path: '/heavens/jadePool',
        icon: 'UnorderedListOutlined',
      },
      {
        title: '三清宫',
        path: '/heavens/sanqing',
        icon: 'UnorderedListOutlined',
      }
    ]
  },
];

export default menuList;
