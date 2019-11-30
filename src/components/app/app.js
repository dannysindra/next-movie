import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HeaderNavigation } from '../header-navigation';
import { PageHome } from '../page-home';
import { PageMovie } from '../page-movie';

export const App = () => {
    return (
        <Router>
            <HeaderNavigation />
            <Switch>
                <Route path="/movie/:id">
                    <PageMovie />
                </Route>
                <Route path="/">
                    <PageHome />
                </Route>
            </Switch>
        </Router>
    );
};
