import React from 'react';
import { KIND } from 'baseui/button';

import { Button } from 'next-movie-components';

import { Firebase } from '../../utils';

export const AuthButton = ({ onClickLogin }) => {
    const { isLoggedIn, logout } = Firebase.useFirebaseAuth();

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
