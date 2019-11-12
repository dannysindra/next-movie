import React, { useState } from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import {
    HeaderNavigation as BaseHeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

import { Button } from 'next-movie-components';

import { Login } from '../login';
import { Search } from '../search';

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
    const [, theme] = useStyletron();

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
                        <Block
                            as="h1"
                            margin={0}
                            color={theme.colors.colorPrimary}
                        >
                            Next Movie
                        </Block>
                    </StyledNavigationItem>
                </StyledNavigationList>
                <StyledNavigationList $align={ALIGN.center} />
                <StyledNavigationList $align={ALIGN.right}>
                    <Block display={['none', 'none', 'block']} width="370px">
                        <Search />
                    </Block>
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
