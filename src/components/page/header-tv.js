import React from 'react';
import ReactPlayer from 'react-player';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart, FaCalendar, FaClock, FaTv } from 'react-icons/fa';

import { Genre } from 'next-movie-components';

import {
    Root,
    Separator,
    Media,
    Details,
    Metadata,
    Info
} from './styled/header';
import { Meta } from './styled/meta';

export const HeaderTv = ({ data, controls }) => {
    const [, theme] = useStyletron();
    const {
        posterImgUrl,
        name,
        genres,
        lastAirDate,
        runtime,
        totalSeasons,
        votes,
        videoUrl
    } = data;

    return (
        <Root>
            <Media>
                <Media.Poster>
                    <Block
                        as="img"
                        alt="No poster"
                        src={posterImgUrl}
                        width="100%"
                        height="auto"
                    />
                </Media.Poster>
                <Separator />
                <Media.Video>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </Media.Video>
            </Media>
            <Details>
                <Metadata>
                    <Meta
                        icon={
                            <FaCalendar
                                color={theme.colors.colorSecondary}
                                size="0.8em"
                            />
                        }
                        label={'Last air date'}
                        value={lastAirDate}
                    />
                    <Meta
                        icon={
                            <FaClock
                                color={theme.colors.backgroundAlt}
                                size="0.8em"
                            />
                        }
                        label={'Episode runtime'}
                        value={runtime}
                    />
                    <Meta
                        icon={
                            <FaTv color={theme.colors.positive} size="0.8em" />
                        }
                        label="Number of seasons"
                        value={totalSeasons}
                    />
                    <Meta
                        icon={
                            <FaHeart
                                color={theme.colors.colorPrimary}
                                size="0.8em"
                            />
                        }
                        label={'Votes'}
                        value={votes}
                    />
                </Metadata>
                <Info>
                    <Info.Title>{name}</Info.Title>
                    {genres.map(({ id, name }) => (
                        <Genre
                            key={id}
                            style={{
                                marginRight: theme.sizing.scale200,
                                marginBottom: theme.sizing.scale200
                            }}
                        >
                            {name}
                        </Genre>
                    ))}
                    <Block as="div" height="scale900" />
                    {controls}
                </Info>
            </Details>
        </Root>
    );
};