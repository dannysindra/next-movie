import React from 'react';
import { string, number, arrayOf, shape, node, func } from 'prop-types';

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
    const { id, backdropImgUrl, posterImgUrl, title, releaseDate } = movies[
        index
    ];

    return (
        <Root>
            <Backdrop>
                <Backdrop.Mask />
                <Backdrop.Vignette />
                <Backdrop.Poster src={posterImgUrl} alt="No poster" />
                <Backdrop.Image src={backdropImgUrl} alt="No backdrop" />
            </Backdrop>
            <Body>
                <Body.Left>
                    <Poster src={posterImgUrl} alt="No poster" />
                </Body.Left>
                <Body.Right>
                    <Metadata>
                        <Metadata.Title>{title}</Metadata.Title>
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
                                    src={movie.backdropImgUrl}
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
            backdropImgUrl: string,
            posterImgUrl: string,
            title: string,
            tagline: string
        })
    ).isRequired,
    onReelItemClick: func,
    controls: node
};

Reel.defaultProps = {
    onReelItemClick: undefined,
    controls: undefined
};
