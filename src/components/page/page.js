import { styled } from 'baseui';

const PageContent = styled('div', ({ $theme }) => {
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

export const Page = styled('div', {});

Page.Content = PageContent;
