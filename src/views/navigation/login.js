import React from 'react';
import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { ListItem, ListItemLabel, ARTWORK_SIZES } from 'baseui/list';
import Plus from 'baseui/icon/plus';
import Search from 'baseui/icon/search';
import { FaSignInAlt } from 'react-icons/fa';

import { Modal as BaseModal } from 'next-movie-components';

import { usePrimaryColor } from '../../styles';
import { AuthUI } from '../../utils/auth';

const Line = styled('div', ({ $theme }) => {
    const { colors, sizing } = $theme;

    return {
        marginTop: sizing.scale900,
        marginBottom: sizing.scale100,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: colors.borderOpaque,
        width: '100%',
        height: '1px'
    };
});

const Tips = styled('ul', ({ $theme }) => {
    return {
        paddingLeft: 0
    };
});

export const Login = ({ onClose, ...rest }) => {
    const titleClass = usePrimaryColor({
        fontWeight: 'bold'
    });

    return (
        <BaseModal
            {...rest}
            unstable_ModalBackdropScroll
            onClose={onClose}
            header={
                <>
                    Find and save your{' '}
                    <span className={titleClass}>Next Movie</span>
                </>
            }
        >
            <Block height="scale100" />
            <AuthUI onLoginSuccess={onClose} />
            <Line />
            <Tips>
                <ListItem
                    artwork={FaSignInAlt}
                    artworkSize={ARTWORK_SIZES.MEDIUM}
                >
                    <ListItemLabel description="It is free and easy">
                        Sign In
                    </ListItemLabel>
                </ListItem>
                <ListItem artwork={Search} artworkSize={ARTWORK_SIZES.LARGE}>
                    <ListItemLabel description="Use the search field to quickly find movie by its title">
                        Find
                    </ListItemLabel>
                </ListItem>
                <ListItem artwork={Plus} artworkSize={ARTWORK_SIZES.LARGE}>
                    <ListItemLabel description="Add movie you want to watch later to your watchlist">
                        Save
                    </ListItemLabel>
                </ListItem>
            </Tips>
        </BaseModal>
    );
};
