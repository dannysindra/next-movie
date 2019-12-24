import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from 'baseui/block';
import { KIND } from 'baseui/button';

import { Button, Navigation } from 'next-movie-components';

import { Login } from '../../components';
import { useModal } from '../../hooks';

import { useVisibility } from './hooks';
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
    const { isOpen, onOpen, onClose } = useModal(false);
    const transparent = useVisibility();

    return (
        <>
            <Login isOpen={isOpen} onClose={onClose} />
            <Navigation
                logo={<NextMovieLink />}
                finder={
                    <Block display={['none', 'none', 'block']} width="370px">
                        <Search />
                    </Block>
                }
                control={
                    <Button onClick={onOpen} kind={KIND.primary}>
                        Sign In
                    </Button>
                }
                $transparent={transparent}
            />
        </>
    );
};
