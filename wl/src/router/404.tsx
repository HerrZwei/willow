import React from 'react';
import { Button } from 'antd';
import { Redirect, useHistory } from 'react-router';

const Page404: React.FC = () => {
  const { replace } = useHistory();
  const go2Index = () => {
   replace('/index')
  }
  return (<>
    404
    <Redirect to="/404" />
    <Button onClick={go2Index}>返回首页</Button>
  </>)
};

export default Page404;
