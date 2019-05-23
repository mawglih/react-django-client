import React from 'react';
import Auth from 'components/Auth';
import Product from 'components/ProductDetail';
import Products from 'components//Products';
import {
  AUTH,
  PRODUCTS,
  PRODUCT_BY_ID,
} from './constants';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route
      exact
      path={PRODUCTS}
      component={Products}
    />
    <Route
      exact
      path={PRODUCT_BY_ID}
      component={Product}
    />
    <Route
      exact
      path={AUTH}
      component={Auth}
    />
  </Switch>
);
