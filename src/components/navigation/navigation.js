import React from 'react';
import {
    HeaderNavigation as BaseHeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

import { useVisibility } from './hooks';

const Root = {
    style: ({ $theme, $transparent }) => {
        const { colors, sizing } = $theme;

        return {
            backgroundColor: $transparent ? 'transparent' : colors.background,
            borderBottom: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10000,
            [`@media screen and (min-width: 850px)`]: {
                paddingLeft: sizing.scale1000,
                paddingRight: sizing.scale1000
            }
        };
    }
};

export const Navigation = ({ logo, finder, loginButton }) => {
    const transparent = useVisibility();

    return (
        <BaseHeaderNavigation overrides={{ Root }} $transparent={transparent}>
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
