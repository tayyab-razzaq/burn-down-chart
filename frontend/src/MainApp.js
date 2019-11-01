import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import store from './store';
import browserHistory from './history';

export default () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
);