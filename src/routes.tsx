import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import map from 'lodash/map';
import { CategoryPage } from './pages/category-page';

const routeConfig = [
    {
        id: 'CATEGORY',
        path: '/:category/:subCategory',
        exact: true,
        component: <CategoryPage />
    },
    {
        id: 'DEFAULT',
        path: '/*',
        component: <Redirect to="/beef/brisket" />
    }
]

export const Routes: React.FunctionComponent = () => {

    const renderRoutes = () => {
        const renderedRoutes = map(routeConfig, route => {
            return <Route key={route.id} path={route.path} exact={route.exact} render={() => route.component}></Route>;
        });

        return renderedRoutes;
    };

    return <Switch>{renderRoutes()}</Switch>;
};

export default Routes;
