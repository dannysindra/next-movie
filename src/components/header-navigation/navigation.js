import React from 'react';
import {
    HeaderNavigation as BaseHeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

const Root = {
    style: ({ $theme, $transparent }) => {
        const { breakpoints, colors, sizing } = $theme;

        return {
            backgroundColor: $transparent ? 'transparent' : colors.background,
            borderBottom: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10000,
            [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
                paddingLeft: sizing.scale400,
                paddingRight: sizing.scale400
            },
            [`@media screen and (min-width: ${breakpoints.large}px)`]: {
                paddingLeft: sizing.scale1200,
                paddingRight: sizing.scale1200
            }
        };
    }
};

export const Navigation = ({ logo, finder, loginButton, ...rest }) => {
    return (
        <BaseHeaderNavigation overrides={{ Root }} {...rest}>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>{logo}</StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                {finder}
                <StyledNavigationItem>{loginButton}</StyledNavigationItem>
                <StyledNavigationItem />
            </StyledNavigationList>
        </BaseHeaderNavigation>
    );
};
