import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress'
const MonorepoLazy = lazy(() => import('./components/MonorepoApp'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/" component={MonorepoLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}
