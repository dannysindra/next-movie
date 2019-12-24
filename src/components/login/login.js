import React from 'react';

import { Modal as BaseModal } from 'next-movie-components';

import { usePrimaryColor } from '../../styles';

export const Login = props => {
    const titleClass = usePrimaryColor({
        fontWeight: 'bold'
    });

    return (
        <BaseModal
            {...props}
            header={
                <>
                    Sign In to <span className={titleClass}>Next Movie</span>
                </>
            }
        >
            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
            faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </BaseModal>
    );
};
