import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress'
const MonoreporeactLazy = lazy(() => import('./components/MonoreporeactApp'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/" component={MonoreporeactLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}
