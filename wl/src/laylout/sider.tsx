import React, { useState } from 'react'
import { Layout } from 'antd';
import MyMenu from './menu/menu';

const { Sider } = Layout;

const MySider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => setCollapsed(!collapsed);

  return (<>
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
      <div className="logo" />
      <MyMenu />
    </Sider>
  </>)
};

export default MySider;