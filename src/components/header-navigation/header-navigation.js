import React from 'react';
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
import { useVisibility, useModal } from './hooks';

const Root = {
    style: ({ $theme, $transparent }) => ({
        backgroundColor: $transparent
            ? 'transparent'
            : $theme.colors.background,
        borderBottom: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000
    })
};

export const HeaderNavigation = () => {
    const { isOpen, open, close } = useModal(false);
    const transparent = useVisibility();
    const [, theme] = useStyletron();

    return (
        <>
            <Login isOpen={isOpen} onClose={close} />
            <BaseHeaderNavigation
                overrides={{ Root }}
                $transparent={transparent}
            >
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
                        <Button onClick={open} variant="primary">
                            Sign In
                        </Button>
                    </StyledNavigationItem>
                    <StyledNavigationItem />
                </StyledNavigationList>
            </BaseHeaderNavigation>
        </>
    );
};
