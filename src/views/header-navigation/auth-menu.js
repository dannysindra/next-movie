import React from 'react';
import { PLACEMENT } from 'baseui/popover';

import { PopoverMenu } from 'next-movie-components';

export const AuthMenu = ({ logout }) => {
    const menuItems = [
        {
            label: 'Log out',
            callback: logout
        }
    ];

    return <PopoverMenu items={menuItems} placement={PLACEMENT.bottomRight} />;
};
