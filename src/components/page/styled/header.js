import { styled } from 'baseui';

// Media
export const Separator = styled('div', ({ $theme }) => {
    const { breakpoints } = $theme;

    return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        display: 'none',
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            display: 'block'
        }
    };
});

const MediaPoster = styled('div', ({ $theme }) => {
    const { breakpoints } = $theme;

    return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '25%',
        display: 'none',
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            display: 'block'
        }
    };
});

const MediaVideo = styled('div', ({ $theme }) => {
    return {
        flexGrow: 3,
        flexShrink: 1,
        flexBasis: '70%',
        minHeight: '250px'
    };
});

export const Media = styled('div', ({ $theme }) => {
    return {
        display: 'flex'
    };
});

Media.Poster = MediaPoster;
Media.Video = MediaVideo;

// Details
export const Details = styled('div', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        paddingTop: sizing.scale800,
        paddingBottom: sizing.scale800,
        paddingLeft: sizing.scale800,
        paddingRight: sizing.scale800,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            flexDirection: 'row',
            paddingTop: sizing.scale1000,
            paddingLeft: 'initial',
            paddingRight: 'initial'
        }
    };
});

// Metadata
export const Metadata = styled('div', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '30%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: sizing.scale1000,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            flexDirection: 'column',
            paddingTop: 'initial'
        }
    };
});

// Info
const Title = styled('h2', ({ $theme }) => {
    const { breakpoints, typography } = $theme;

    return {
        margin: '0 0 13px 0',
        color: 'white',
        ...typography.font550,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font750
        },
        [`@media screen and (min-width: ${breakpoints.large}px)`]: {
            ...typography.font950
        }
    };
});

const Subtitle = styled('h3', ({ $theme }) => {
    const { breakpoints, colors, typography } = $theme;

    return {
        color: colors.mono200,
        ...typography.font250,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font350
        },
        [`@media screen and (min-width: ${breakpoints.large}px)`]: {
            ...typography.font450
        }
    };
});

export const Info = styled('div', ({ $theme }) => {
    return {
        flexGrow: 3,
        flexShrink: 1,
        flexBasis: '70%'
    };
});

Info.Title = Title;
Info.Subtitle = Subtitle;

// Root
export const Root = styled('div', ({ $theme }) => {
    const { breakpoints, colors, sizing } = $theme;

    return {
        backgroundColor: colors.black,
        boxSizing: 'border-box',
        width: '100%',
        paddingTop: sizing.scale1600,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            paddingTop: sizing.scale2400,
            paddingLeft: sizing.scale800,
            paddingRight: sizing.scale800
        },
        [`@media screen and (min-width: ${breakpoints.large}px)`]: {
            paddingTop: sizing.scale2400,
            paddingLeft: sizing.scale1600,
            paddingRight: sizing.scale1600
        }
    };
});
