import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom'

import './layout.css';
import MyContent from './content';
import MySider from './sider';

class SiderDemo extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <BrowserRouter>
            <MySider />
            <MyContent />
          </BrowserRouter>
        </Layout>
      </>
    );
  }
}

export default SiderDemo;
