import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Button } from 'next-movie-components';

import { Navigation } from '../navigation';
import { Login } from '../login';
import { Search } from '../search';
import { useModal } from './hooks';

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
            />
        </>
    );
};
