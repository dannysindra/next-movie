import React from 'react';

import { Modal as BaseModal } from 'next-movie-components';

import { usePrimaryColor } from '../../styles';

import { FirebaseUI } from './firebase-ui';

export const Login = ({ onClose, ...rest }) => {
    const titleClass = usePrimaryColor({
        fontWeight: 'bold'
    });

    return (
        <BaseModal
            {...rest}
            onClose={onClose}
            header={
                <>
                    Sign In to <span className={titleClass}>Next Movie</span>
                </>
            }
        >
            <FirebaseUI onLoginSuccess={onClose} />
        </BaseModal>
    );
};
