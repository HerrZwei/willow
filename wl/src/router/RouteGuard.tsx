import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect } from 'react-router-dom';
interface IPropsRouteGuard {
  children?: string | JSX.Element;
  route: any;
}

const RouteGuard: React.FC<IPropsRouteGuard> = (props: IPropsRouteGuard) => {
  const { route } = props;
  return (
    <>
      {renderRoutes([
        ...route.routes,
        {
          path: '*',
          component: (): JSX.Element => <Redirect to="/404" />,
        },
      ])}
    </>
  );
};

export default RouteGuard;
