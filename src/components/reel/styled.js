import { styled } from 'baseui';

const POSTER_BREAKPOINT = 850;

export const Root = styled('div', {
    width: '100%'
});

const BackdropMask = styled('div', {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'black',
    opacity: 0.5
});

const BackdropVignette = styled('div', ({ $theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '80px',
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, ${$theme.colors.background} 100%)`
}));

const BackdropImage = styled('img', ({ $theme }) => {
    const { breakpoints } = $theme;

    return {
        display: 'none',
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            display: 'block',
            width: '100%',
            height: '100%'
        }
    };
});

const BackdropPoster = styled('img', ({ $theme }) => {
    const { breakpoints } = $theme;

    return {
        display: 'block',
        width: '100%',
        height: '100%',
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            display: 'none'
        }
    };
});

export const Backdrop = styled('div', {
    position: 'absolute',
    width: '100%',
    maxHeight: '700px',
    overflow: 'hidden'
});

Backdrop.Mask = BackdropMask;
Backdrop.Image = BackdropImage;
Backdrop.Poster = BackdropPoster;
Backdrop.Vignette = BackdropVignette;

const BodyLeft = styled('div', ({ $theme }) => ({
    width: '185px',
    display: 'none',
    maxHeight: '270px',
    overflow: 'hidden',
    [`@media screen and (min-width: ${POSTER_BREAKPOINT}px)`]: {
        display: 'block',
        marginRight: $theme.sizing.scale1000
    }
}));

const BodyRight = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
});

export const Body = styled('div', ({ $theme }) => {
    const { sizing } = $theme;

    return {
        display: 'flex',
        position: 'relative',
        paddingTop: '18vw',
        paddingLeft: sizing.scale800,
        paddingRight: sizing.scale800,
        [`@media screen and (min-width: ${POSTER_BREAKPOINT}px)`]: {
            paddingLeft: sizing.scale1600,
            paddingRight: sizing.scale1600
        }
    };
});

Body.Left = BodyLeft;
Body.Right = BodyRight;

export const Poster = styled('img', {
    width: '100%',
    height: 'auto'
});

const MetadataTitle = styled('h2', ({ $theme }) => ({
    margin: '0 0 13px 0',
    ...$theme.typography.font950,
    color: 'white'
}));

const MetadataSubtitle = styled('h3', ({ $theme }) => {
    const { colors, typography } = $theme;

    return {
        color: colors.mono400,
        ...typography.font450
    };
});

const MetadataActions = styled('div', ({ $theme }) => {
    return {};
});

export const Metadata = styled('div', {});

Metadata.Title = MetadataTitle;
Metadata.Subtitle = MetadataSubtitle;
Metadata.Actions = MetadataActions;

const ThumbnailImage = styled('img', {
    width: '100%',
    height: 'auto'
});

const ThumbnailMask = styled('div', ({ $active }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'black',
    opacity: $active ? '0.0' : '0.6'
}));

export const Thumbnail = styled('button', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        position: 'relative',
        width: '64px',
        height: '36px',
        marginRight: sizing.scale100,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            width: '96px',
            height: '54px'
        }
    };
});

Thumbnail.Image = ThumbnailImage;
Thumbnail.Mask = ThumbnailMask;

export const Carousel = styled('div', ({ $theme }) => {
    const { sizing } = $theme;

    return {
        marginTop: sizing.scale800,
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: sizing.scale400,
        [`@media screen and (min-width: ${POSTER_BREAKPOINT}px)`]: {
            marginTop: 'auto',
            alignSelf: 'flex-end'
        }
    };
});
