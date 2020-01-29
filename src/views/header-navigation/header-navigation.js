import React from 'react';
import { Link } from 'react-router-dom';
import { withStyle } from 'baseui';
import { Block } from 'baseui/block';
import {
    ALIGN,
    HeaderNavigation as BaseHeaderNavigation,
    StyledNavigationList,
    StyledNavigationItem
} from 'baseui/header-navigation';

import { useModal } from '../../hooks';
import { useAuth } from '../../utils/auth';
import { useVisibility } from './hooks';

import { AuthButton } from './auth-button';
import { AuthMenu } from './auth-menu';
import { Login } from './login';
import { Search } from './search';

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
            zIndex: 1,
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

const MediumNavigationItem = withStyle(StyledNavigationItem, ({ $theme }) => {
    const { breakpoints } = $theme;

    return {
        display: 'none',
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            display: 'block'
        }
    };
});

const NextMovieLink = () => (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <Block
            as="h1"
            margin={0}
            $style={({ $theme }) => ({ color: $theme.colors.colorPrimary })}
        >
            Next Movie
        </Block>
    </Link>
);

const Finder = () => (
    <Block width={['120px', '120px', '250px', '370px']}>
        <Search placeholder="Search" />
    </Block>
);

export const HeaderNavigation = () => {
    const { isLoggedIn, logout } = useAuth();
    const { isOpen, onOpen, onClose } = useModal(false);
    const transparent = useVisibility();

    return (
        <>
            <Login isOpen={isOpen} onClose={onClose} />
            <BaseHeaderNavigation
                overrides={{ Root }}
                $transparent={transparent}
            >
                <StyledNavigationList $align={ALIGN.left}>
                    <StyledNavigationItem>
                        <NextMovieLink />
                    </StyledNavigationItem>
                    <MediumNavigationItem />
                    <MediumNavigationItem />
                    <MediumNavigationItem>
                        <Finder />
                    </MediumNavigationItem>
                </StyledNavigationList>
                <StyledNavigationList $align={ALIGN.center} />
                <StyledNavigationList $align={ALIGN.right}>
                    {!isLoggedIn ? null : (
                        <StyledNavigationItem $style={{ color: 'white' }}>
                            Watchlist
                        </StyledNavigationItem>
                    )}
                    <StyledNavigationItem>
                        {isLoggedIn ? (
                            <AuthMenu logout={logout} />
                        ) : (
                            <AuthButton onClickLogin={onOpen} />
                        )}
                    </StyledNavigationItem>
                    <StyledNavigationItem />
                </StyledNavigationList>
            </BaseHeaderNavigation>
        </>
    );
};
