import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

import { HeaderNavigation } from '../header-navigation';
import { Home } from '../home';
import { Movie } from '../movie';
import { TV } from '../tv';

// https://reacttraining.com/react-router/web/guides/scroll-restoration
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

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
