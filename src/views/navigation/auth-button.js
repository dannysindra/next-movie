import React from 'react';
import { KIND } from 'baseui/button';

import { Button } from 'next-movie-components';

import { useAuth } from '../../utils/auth';

export const LoginButton = props => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return null;
    }

    return (
        <Button {...props} kind={KIND.primary}>
            Sign In
        </Button>
    );
};

export const AuthButton = ({ onClickLogin }) => {
    const { isLoggedIn, logout } = useAuth();

    return isLoggedIn ? (
        <Button kind={KIND.secondary} onClick={() => logout()}>
            Sign Out
        </Button>
    ) : (
        <Button kind={KIND.primary} onClick={onClickLogin}>
            Sign In
        </Button>
    );
};
