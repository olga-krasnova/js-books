import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </main>
);

export default App;
