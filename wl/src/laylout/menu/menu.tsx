import React from 'react'
import { Menu } from 'antd';
import * as MenuIcons from './icons';
import menuList from './menuTest';
import IMenuProps from './menu-d';

const { SubMenu, Item } = Menu;

const RenderMenu = (menuList: IMenuProps[]) =>
  menuList?.map(item => {
    const { path, title = '', icon } = item;
    
    const IconTag: React.ForwardRefExoticComponent<any> = icon && (MenuIcons as any)[icon as string]
    const icon1 = IconTag ? <IconTag /> : undefined;
    return item?.children ? (
      <SubMenu key={title} title={title} icon={icon1}>
        {RenderMenu(item.children)}
      </SubMenu>
    ) : (
      <Item key={path} icon={icon1}>
        { title}
      </Item >
    )
  });

const MyMenu = () => {
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {RenderMenu(menuList)}
      </Menu>
    </>
  )
}

export default MyMenu;
