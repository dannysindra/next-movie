import React from 'react';
import { useStyletron } from 'baseui';
import {
    HeaderNavigation as BaseHeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

import { Button, Search } from 'next-movie-components';

const Root = {
    style: ({ $theme }) => ({
        backgroundColor: $theme.colors.background
    })
};

export const HeaderNavigation = () => {
    const [useCss, theme] = useStyletron();
    const headerClass = useCss({
        color: theme.colors.colorPrimary
    });

    return (
        <BaseHeaderNavigation overrides={{ Root }}>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <h1 className={headerClass}>Next Movie</h1>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem style={{ width: '370px' }}>
                    <Search placeholder="Search a movie by title" />
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <Button variant="primary">Sign In</Button>
                </StyledNavigationItem>
                <StyledNavigationItem />
            </StyledNavigationList>
        </BaseHeaderNavigation>
    );
};
