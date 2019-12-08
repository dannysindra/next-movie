import { styled } from 'baseui';

export const Title = styled('div', ({ $theme }) => {
    return {
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: '30%'
    };
});

export const Content = styled('div', ({ $theme }) => {
    return {
        flexGrow: '3',
        flexShrink: '1',
        flexBasis: '70%'
    };
});

export const Root = styled('div', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: sizing.scale800,
        paddingBottom: sizing.scale800,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            flexDirection: 'row'
        }
    };
});
