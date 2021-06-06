import { Suspense } from 'react'
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout, Breadcrumb, Spin } from 'antd';
import MyFooter from './footer';
import routes from 'src/router/config';

const { Header, Content } = Layout;

const MyContent = () => {
  return (<>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Suspense
            fallback={
              <div style={{ textAlign: 'center' }}>
                <Spin tip="加载中..." />
              </div>
            }
          >
            {renderRoutes(routes)}
          </Suspense>
        </Switch>
      </Content>
      <div />
      <MyFooter />
    </Layout>
  </>)
};

export default MyContent;
