import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Notifs } from 'redux-notifications';
import routes from '../routes';

import configureStore from '../store/appStore';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext

export const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);


const mainApp = props => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <Notifs />
    </div>
  </Provider>
);

export default mainApp;
