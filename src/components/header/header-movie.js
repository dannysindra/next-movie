import React from 'react';
import ReactPlayer from 'react-player';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart, FaCalendar, FaClock, FaDollarSign } from 'react-icons/fa';

import { Tag } from 'next-movie-components';

import { Root, Separator, Media, Details, Metadata, Info } from './styled';
import { Meta } from './meta';

export const HeaderMovie = ({ data, controls }) => {
    const [, theme] = useStyletron();
    const {
        posterImgUrl,
        title,
        tagline,
        genres,
        releaseDate,
        runtime,
        revenue,
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
                        src={posterImgUrl.large}
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
                        label={'Release'}
                        value={releaseDate}
                    />
                    <Meta
                        icon={
                            <FaClock
                                color={theme.colors.backgroundAlt}
                                size="0.8em"
                            />
                        }
                        label={'Duration'}
                        value={runtime}
                    />
                    <Meta
                        icon={
                            <FaDollarSign
                                color={theme.colors.positive}
                                size="0.8em"
                            />
                        }
                        label={'Revenue'}
                        value={revenue}
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
                    <Info.Title>{title}</Info.Title>
                    <Info.Subtitle>{tagline}</Info.Subtitle>
                    {genres.map(({ id, name }) => (
                        <Tag
                            key={id}
                            style={{
                                marginRight: theme.sizing.scale200,
                                marginBottom: theme.sizing.scale200
                            }}
                        >
                            {name}
                        </Tag>
                    ))}
                    <Block as="div" height="scale900" />
                    {controls}
                </Info>
            </Details>
        </Root>
    );
};
