import { styled, withStyle } from 'baseui';
import { StyledTable, StyledCell } from 'baseui/table';

// Table
export const AvatarContainer = styled('div', ({ $theme }) => {
    return {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '50px'
    };
});

export const InfoContainer = styled('div', ({ $theme }) => {
    return {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '200px',
        marginLeft: $theme.sizing.scale600
    };
});

export const StyledHeadingCell = withStyle(StyledCell, ({ $theme }) => ({
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex'
}));

export const StyledHeadlessTable = withStyle(StyledTable, ({ $theme }) => ({
    backgroundColor: 'transparent',
    marginTop: $theme.sizing.scale400
}));

// Pagination
export const PaginationContainer = styled('div', ({ $theme }) => {
    const { sizing } = $theme;

    return {
        paddingTop: sizing.scale600,
        paddingBottom: sizing.scale600,
        display: 'flex'
    };
});
