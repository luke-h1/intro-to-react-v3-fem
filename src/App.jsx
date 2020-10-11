/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route default component={FourOhFour} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(React.createElement(App), document.getElementById('app'));
