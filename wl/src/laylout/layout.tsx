import React from 'react';
import { Layout } from 'antd';

import './layout.css';
import MyContent from './content';
import MySider from './sider';

class SiderDemo extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <MySider />
          <MyContent />
        </Layout>

      </>
    );
  }
}

export default SiderDemo;
