import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import Show from 'baseui/icon/show';
import { FaHeart } from 'react-icons/fa';

// constants
export const KIND = {
    movie: 'movie',
    tv: 'tv'
};

const formatVoteCount = count => {
    if (count >= 1000) {
        let num = count / 1000;
        return `${num.toFixed(1)}K`;
    }
    return count;
};

export const Meta = ({ title, releaseDate, votes, voteCount }) => {
    const [, theme] = useStyletron();

    return (
        <>
            <Block
                color="white"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
            >
                {title}
            </Block>
            <Block display="flex" alignItems="center">
                {releaseDate}
                {votes && (
                    <>
                        <FaHeart
                            color={theme.colors.colorPrimary}
                            size="0.8em"
                        />
                        &nbsp;
                        {votes}
                    </>
                )}
                {voteCount && (
                    <>
                        &nbsp; &nbsp;
                        <Show />
                        &nbsp;
                        {formatVoteCount(voteCount)}
                    </>
                )}
            </Block>
        </>
    );
};
