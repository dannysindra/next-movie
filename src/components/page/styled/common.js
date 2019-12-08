import { styled } from 'baseui';

export const Heading = styled('h4', ({ $theme }) => {
    const { breakpoints, colors, sizing, typography } = $theme;

    return {
        ...typography.font550,
        color: colors.backgroundAlt,
        marginTop: sizing.scale300,
        marginBottom: sizing.scale300,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font750,
            marginTop: sizing.scale700,
            marginBottom: sizing.scale800
        }
    };
});

export const Paragraph = styled('p', ({ $theme }) => {
    const { breakpoints, colors, typography } = $theme;

    return {
        ...typography.font300,
        color: colors.mono200,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font400
        }
    };
});
