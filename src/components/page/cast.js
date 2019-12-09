import React, { useState } from 'react';
import { Avatar } from 'baseui/avatar';
import { Pagination } from 'baseui/pagination';
import { Label3, Paragraph1 } from 'baseui/typography';
import { StyledBody, StyledRow } from 'baseui/table';

import { Button } from 'next-movie-components';

import {
    AvatarContainer,
    InfoContainer,
    StyledHeadlessTable,
    StyledHeadingCell,
    PaginationContainer
} from './styled/cast';

const PAGE_SIZE = 5;

const BaseButton = {
    style: ({ $theme }) => ({
        color: $theme.colors.mono600,
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':focus': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':active': {
            backgroundColor: 'transparent',
            color: $theme.colors.mono200
        },
        ':disabled': {
            cursor: 'not-allowed',
            backgroundColor: 'transparent',
            color: $theme.colors.buttonDisabledText
        }
    })
};

const NextButton = {
    component: ({ onClick }) => (
        <Button onClick={onClick} overrides={{ BaseButton }}>
            &gt;
        </Button>
    )
};

const PrevButton = {
    component: ({ onClick }) => (
        <Button onClick={onClick} overrides={{ BaseButton }}>
            &lt;
        </Button>
    )
};

const MaxLabel = {
    style: ({ $theme }) => ({
        backgroundColor: 'transparent',
        color: $theme.colors.mono600
    })
};

const DropdownContainer = {
    style: ({ $theme }) => ({
        backgroundColor: $theme.colors.mono200,
        zIndex: 100
    })
};

// https://baseweb.design/components/table/
export const Cast = props => {
    const [page, setPage] = useState(1);

    const handlePageChange = nextPage => {
        if (nextPage < 1) {
            return;
        }
        if (nextPage > Math.ceil(props.data.length / PAGE_SIZE)) {
            return;
        }
        setPage(nextPage);
    };

    const view = () => {
        const min = (page - 1) * PAGE_SIZE;
        const sliced = props.data.slice(min, min + PAGE_SIZE);

        return sliced.map((row, index) => (
            <StyledRow key={index}>
                <StyledHeadingCell>
                    <AvatarContainer>
                        <Avatar
                            name={row.name}
                            size="scale1200"
                            src={row.profileImgUrl}
                        />
                    </AvatarContainer>
                    <InfoContainer>
                        <Paragraph1 as="div" color="white">
                            {row.name}
                        </Paragraph1>
                        <Label3 color="mono400">{row.character}</Label3>
                    </InfoContainer>
                </StyledHeadingCell>
            </StyledRow>
        ));
    };

    return (
        <>
            <div>
                <StyledHeadlessTable>
                    <StyledBody $width="100%">{view()}</StyledBody>
                </StyledHeadlessTable>
            </div>
            <PaginationContainer>
                <Pagination
                    currentPage={page}
                    numPages={Math.ceil(props.data.length / PAGE_SIZE)}
                    onPageChange={({ nextPage }) => handlePageChange(nextPage)}
                    overrides={{
                        NextButton,
                        PrevButton,
                        MaxLabel,
                        DropdownContainer
                    }}
                />
            </PaginationContainer>
        </>
    );
};
