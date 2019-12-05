import React from 'react';
import ReactPlayer from 'react-player';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { FaHeart, FaCalendar, FaClock, FaDollarSign } from 'react-icons/fa';

import { Header } from './styled';

const Info = ({ icon, label, value }) => (
    <Block marginTop="scale600" minWidth="50%">
        <Block color="mono500" font="font200">
            {icon} {label}
        </Block>
        <Block color="mono200" font="font200">
            {value}
        </Block>
    </Block>
);

const Genre = ({ children, ...rest }) => (
    <Button
        kind={KIND.secondary}
        size={SIZE.compact}
        shape={SHAPE.pill}
        overrides={{
            BaseButton: {
                style: ({ $theme }) => {
                    const { colors, sizing, typography } = $theme;

                    return {
                        ...typography.font200,
                        backgroundColor: colors.primary700,
                        color: colors.mono200,
                        marginRight: sizing.scale200,
                        marginBottom: sizing.scale200,
                        ':hover': {
                            backgroundColor: colors.primary700
                        },
                        ':focus': {
                            backgroundColor: colors.primary700
                        },
                        ':active': {
                            backgroundColor: colors.primary700
                        }
                    };
                }
            }
        }}
        {...rest}
    >
        {children}
    </Button>
);

export const MovieHeader = ({ data, controls }) => {
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
        <Header>
            <Header.Media>
                <Header.Poster>
                    <Block
                        as="img"
                        alt="No poster"
                        src={posterImgUrl}
                        width="100%"
                        height="auto"
                    />
                </Header.Poster>
                <Header.Separator />
                <Header.Video>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </Header.Video>
            </Header.Media>
            <Header.Details>
                <Header.Metadata>
                    <Info
                        icon={
                            <FaCalendar
                                color={theme.colors.colorSecondary}
                                size="0.8em"
                            />
                        }
                        label={'Release'}
                        value={releaseDate}
                    />
                    <Info
                        icon={
                            <FaClock
                                color={theme.colors.backgroundAlt}
                                size="0.8em"
                            />
                        }
                        label={'Duration'}
                        value={runtime}
                    />
                    <Info
                        icon={
                            <FaDollarSign
                                color={theme.colors.positive}
                                size="0.8em"
                            />
                        }
                        label={'Revenue'}
                        value={revenue}
                    />
                    <Info
                        icon={
                            <FaHeart
                                color={theme.colors.colorPrimary}
                                size="0.8em"
                            />
                        }
                        label={'Votes'}
                        value={votes}
                    />
                </Header.Metadata>
                <Header.Info>
                    <Header.Title>{title}</Header.Title>
                    <Header.Subtitle>{tagline}</Header.Subtitle>
                    {genres.map(({ id, name }) => (
                        <Genre key={id}>{name}</Genre>
                    ))}
                    <Block as="div" height="scale900" />
                    {controls}
                </Header.Info>
            </Header.Details>
        </Header>
    );
};
