import React, { useState } from 'react';
import {
    HeaderNavigation as BaseHeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

import { Button } from 'next-movie-components';

import { Login } from '../login';
import { Search } from '../search';
import { usePrimaryColor } from '../styles';

const Root = {
    style: ({ $theme }) => ({
        backgroundColor: $theme.colors.background,
        borderBottom: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
    })
};

export const HeaderNavigation = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const headerClass = usePrimaryColor();

    const openLogin = e => {
        setIsLoginOpen(true);
        e.stopPropagation();
    };
    const closeLogin = () => {
        setIsLoginOpen(false);
    };

    return (
        <>
            <Login isOpen={isLoginOpen} onClose={closeLogin} />
            <BaseHeaderNavigation overrides={{ Root }}>
                <StyledNavigationList $align={ALIGN.left}>
                    <StyledNavigationItem>
                        <h1 className={headerClass}>Next Movie</h1>
                    </StyledNavigationItem>
                </StyledNavigationList>
                <StyledNavigationList $align={ALIGN.center} />
                <StyledNavigationList $align={ALIGN.right}>
                    <StyledNavigationItem style={{ width: '370px' }}>
                        <Search />
                    </StyledNavigationItem>
                    <StyledNavigationItem>
                        <Button onClick={openLogin} variant="primary">
                            Sign In
                        </Button>
                    </StyledNavigationItem>
                    <StyledNavigationItem />
                </StyledNavigationList>
            </BaseHeaderNavigation>
        </>
    );
};
