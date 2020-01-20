import React from 'react';
import { string, number, arrayOf, shape, node, func } from 'prop-types';

import { ReelSkeleton } from './reel-skeleton';

import {
    Root,
    Backdrop,
    Body,
    Poster,
    Metadata,
    Carousel,
    Thumbnail
} from './styled';

export const Reel = ({ index, movies, onReelItemClick, controls }) => {
    if (!movies || movies.length === 0) {
        return <ReelSkeleton />;
    }

    const { id, backdropImgUrl, posterImgUrl, title, releaseDate } = movies[
        index
    ];

    return (
        <Root>
            <Backdrop>
                <Backdrop.Mask />
                <Backdrop.Vignette />
                <Backdrop.Poster src={posterImgUrl.larger} alt="No poster" />
                <Backdrop.Image
                    src={backdropImgUrl.original}
                    alt="No backdrop"
                />
            </Backdrop>
            <Body>
                <Body.Left>
                    <Poster src={posterImgUrl.medium} alt="No poster" />
                </Body.Left>
                <Body.Right>
                    <Metadata>
                        <Metadata.Title>
                            {title.length > 30
                                ? `${title.substring(0, 30)} ...`
                                : title}
                        </Metadata.Title>
                        <Metadata.Subtitle>{releaseDate}</Metadata.Subtitle>
                        <Metadata.Actions>{controls}</Metadata.Actions>
                    </Metadata>
                    <Carousel>
                        {movies.map((movie, index) => (
                            <Thumbnail
                                key={movie.id}
                                onClick={e => {
                                    onReelItemClick(e, index);
                                }}
                            >
                                <Thumbnail.Mask $active={id === movie.id} />
                                <Thumbnail.Image
                                    src={movie.backdropImgUrl.small}
                                    alt="No backdrop"
                                />
                            </Thumbnail>
                        ))}
                    </Carousel>
                </Body.Right>
            </Body>
        </Root>
    );
};

Reel.propTypes = {
    index: number.isRequired,
    movies: arrayOf(
        shape({
            id: number.isRequired,
            backdropImgUrl: shape({}),
            posterImgUrl: shape({}),
            title: string,
            tagline: string
        })
    ),
    onReelItemClick: func,
    controls: node
};

Reel.defaultProps = {
    movies: undefined,
    onReelItemClick: undefined,
    controls: undefined
};
