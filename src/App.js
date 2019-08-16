import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';

const Index = () => <HomePage />;
const Cart = () => <CartPage />;

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </div>
);

export default App;
