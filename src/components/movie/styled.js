import { styled } from 'baseui';

// Header
const HeaderMedia = styled('div', ({ $theme }) => {
    return {
        display: 'flex'
    };
});

const HeaderPoster = styled('div', ({ $theme }) => {
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

const HeaderSeparator = styled('div', ({ $theme }) => {
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

const HeaderVideo = styled('div', ({ $theme }) => {
    return {
        flexGrow: 3,
        flexShrink: 1,
        flexBasis: '70%',
        minHeight: '250px'
    };
});

const HeaderDetails = styled('div', ({ $theme }) => {
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

const HeaderMetadata = styled('div', ({ $theme }) => {
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

const HeaderInfo = styled('div', ({ $theme }) => {
    return {
        flexGrow: 3,
        flexShrink: 1,
        flexBasis: '70%'
    };
});

const HeaderTitle = styled('h2', ({ $theme }) => {
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

const HeaderSubtitle = styled('h3', ({ $theme }) => {
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

export const Header = styled('div', ({ $theme }) => {
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

Header.Media = HeaderMedia;
Header.Separator = HeaderSeparator;
Header.Poster = HeaderPoster;
Header.Video = HeaderVideo;
Header.Details = HeaderDetails;
Header.Metadata = HeaderMetadata;
Header.Info = HeaderInfo;
Header.Title = HeaderTitle;
Header.Subtitle = HeaderSubtitle;

// Section
const SectionLabel = styled('div', ({ $theme }) => {
    return {
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: '30%'
    };
});

const SectionContent = styled('div', ({ $theme }) => {
    return {
        flexGrow: '3',
        flexShrink: '1',
        flexBasis: '70%'
    };
});

export const Section = styled('div', ({ $theme }) => {
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

const SectionH = styled('h4', ({ $theme }) => {
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

const SectionP = styled('p', ({ $theme }) => {
    const { breakpoints, colors, typography } = $theme;

    return {
        ...typography.font300,
        color: colors.mono200,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font400
        }
    };
});

Section.Label = SectionLabel;
Section.Content = SectionContent;
Section.H = SectionH;
Section.P = SectionP;
