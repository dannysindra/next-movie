import { styled, withStyle } from 'baseui';
import { StyledTable, StyledCell } from 'baseui/table';

const containerStyle = ({ $theme }) => ({
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex'
});

// Container
export const CreditContainer = styled('div', containerStyle);

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

export const StyledHeadingCell = withStyle(StyledCell, containerStyle);

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
