import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HeaderNavigation } from '../header-navigation';
import { Home } from '../home';
import { Movie } from '../movie';
import { TV } from '../tv';
import { ScrollToTop } from './scroll-to-top';

export const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <HeaderNavigation />
            <Switch>
                <Route path="/movie/:id">
                    <Movie />
                </Route>
                <Route path="/tv/:id">
                    <TV />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};
