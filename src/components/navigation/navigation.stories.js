import React from 'react';
import { Block } from 'baseui/block';
import { action } from '@storybook/addon-actions';

import { Button, Search } from 'next-movie-components';

import { Navigation } from './navigation';

const actions = {
    onLoginClick: action('onLoginClick')
};

const NextMovieLink = () => (
    <Block
        as="h1"
        margin={0}
        $style={({ $theme }) => ({ color: $theme.colors.colorPrimary })}
    >
        Next Movie
    </Block>
);

const Finder = () => (
    <Block display={['none', 'none', 'block']} width="370px">
        <Search placeholder="Search a movie by title" />
    </Block>
);

const LoginButton = () => (
    <Button onClick={actions.onLoginClick} variant="primary">
        Sign In
    </Button>
);

export default {
    title: 'components|Navigation'
};

export const base = () => (
    <Navigation
        logo={<NextMovieLink />}
        finder={<Finder />}
        loginButton={<LoginButton />}
    />
);
