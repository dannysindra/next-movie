import React from 'react';

import { Modal as BaseModal } from 'next-movie-components';

import { usePrimaryColor } from '../../styles';
import { AuthUI } from '../../utils/auth';

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
            <AuthUI onLoginSuccess={onClose} />
        </BaseModal>
    );
};
