import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

import { Footer } from '../../components';
import { Navigation } from '../navigation';
import { Home } from '../home';
import { Movie } from '../movie';
import { TV } from '../tv';
import { Watchlist } from '../watchlist';

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
            <Navigation />
            <Switch>
                <Route path="/watchlist">
                    <Watchlist />
                </Route>
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
            <Footer />
        </Router>
    );
};
