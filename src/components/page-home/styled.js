import { styled } from 'baseui';

export const Content = styled('div', ({ $theme }) => {
    const { sizing } = $theme;

    return {
        paddingTop: sizing.scale800,
        paddingLeft: sizing.scale800,
        paddingRight: sizing.scale800,
        [`@media screen and (min-width: 850px)`]: {
            paddingLeft: sizing.scale1600,
            paddingRight: sizing.scale1600
        }
    };
});
