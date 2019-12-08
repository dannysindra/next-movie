import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Button } from 'next-movie-components';

import { Login, Navigation } from '../../components';

import { useModal, useVisibility } from './hooks';
import { Search } from './search';

const NextMovieLink = () => (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <Block
            as="h1"
            margin={0}
            $style={({ $theme }) => ({ color: $theme.colors.colorPrimary })}
        >
            Next Movie
        </Block>
    </Link>
);

export const HeaderNavigation = () => {
    const { isOpen, open, close } = useModal(false);
    const transparent = useVisibility();

    return (
        <>
            <Login isOpen={isOpen} onClose={close} />
            <Navigation
                logo={<NextMovieLink />}
                finder={
                    <Block display={['none', 'none', 'block']} width="370px">
                        <Search />
                    </Block>
                }
                loginButton={
                    <Button onClick={open} variant="primary">
                        Sign In
                    </Button>
                }
                $transparent={transparent}
            />
        </>
    );
};
