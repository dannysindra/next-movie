import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Navigation } from 'next-movie-components';

import { Login } from '../login';
import { useModal } from '../../hooks';

import { AuthButton } from './auth-button';
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
                control={<AuthButton onClickLogin={onOpen} />}
                $transparent={transparent}
            />
        </>
    );
};
