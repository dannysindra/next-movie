import React from 'react';
import { useStyletron } from 'baseui';
import Plus from 'baseui/icon/plus';
import Show from 'baseui/icon/show';
import { string, number, arrayOf, shape, func } from 'prop-types';

import { Button } from 'next-movie-components';

import {
    Root,
    Backdrop,
    Body,
    Poster,
    Metadata,
    Carousel,
    Thumbnail
} from './styled';
import { useReel } from './hooks';

export const Reel = ({ movies, duration, onClickAdd, onClickMore }) => {
    const [, theme] = useStyletron();
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: movies.length,
        duration
    });

    if (!movies || movies.length <= 0) {
        return null;
    }

    const { id, backdropImgUrl, posterImgUrl, title, tagline } = movies[index];

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
                        <Metadata.Tagline>{tagline}</Metadata.Tagline>
                        <Metadata.Actions>
                            <Button
                                onClick={e => {
                                    onClickAdd(e, index);
                                }}
                                startEnhancer={() => <Plus size={24} />}
                                style={{ marginRight: theme.sizing.scale600 }}
                                variant="primary"
                            >
                                Watchlist
                            </Button>
                            <Button
                                onClick={e => {
                                    onClickMore(e, index);
                                }}
                                startEnhancer={() => <Show size={24} />}
                                variant="secondary"
                            >
                                More Info
                            </Button>
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
    movies: arrayOf(
        shape({
            id: string.isRequired,
            backdropImgUrl: string,
            posterImgUrl: string,
            title: string,
            tagline: string
        })
    ).isRequired,
    duration: number,
    onClickAdd: func.isRequired,
    onClickMore: func.isRequired
};

Reel.defaultProps = {
    duration: 7000
};
