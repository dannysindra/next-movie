import React from 'react';
import { Block } from 'baseui/block';
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

export const Reel = ({
    index,
    movies,
    onReelItemClick,
    primaryButton,
    secondaryButton
}) => {
    if (index < 0 || !movies || movies.length <= 0) {
        return null;
    }

    const { id, backdropImgUrl, posterImgUrl, title, releaseDate } = movies[
        index
    ];

    return (
        <Root>
            <Backdrop>
                <Backdrop.Mask />
                <Backdrop.Vignette />
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
                        <Metadata.Actions>
                            {primaryButton}
                            <Block display="inline" marginRight="scale600" />
                            {secondaryButton}
                        </Metadata.Actions>
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
    primaryButton: node,
    secondaryButton: node
};

Reel.defaultProps = {
    onReelItemClick: undefined,
    primaryButton: undefined,
    secondaryButton: undefined
};
