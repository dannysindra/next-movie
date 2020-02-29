import React from 'react';
import { Block } from 'baseui/block';

import { usePulseAnimation } from '../../styles';

import { Root, Backdrop, Body, Metadata, Carousel, Thumbnail } from './styled';

export const ReelSkeleton = () => {
    const pulseClass = usePulseAnimation();

    return (
        <Root>
            <Backdrop>
                <Backdrop.Mask />
                <Backdrop.Vignette />
            </Backdrop>
            <Body>
                <Body.Left>
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        width="100%"
                        height="100%"
                    />
                </Body.Left>
                <Body.Right>
                    <Metadata>
                        <Metadata.Title>
                            <Block
                                backgroundColor="mono700"
                                className={pulseClass}
                                width="300px"
                                height="30px"
                            />
                        </Metadata.Title>
                        <Metadata.Subtitle>
                            <Block
                                backgroundColor="mono700"
                                className={pulseClass}
                                width="200px"
                                height="20px"
                            />
                        </Metadata.Subtitle>
                    </Metadata>
                    <Carousel>
                        {[0, 1, 2, 3, 4].map(el => (
                            <Thumbnail key={el}>
                                <Block
                                    backgroundColor="mono700"
                                    className={pulseClass}
                                    width="100%"
                                    height="100%"
                                />
                            </Thumbnail>
                        ))}
                    </Carousel>
                </Body.Right>
            </Body>
        </Root>
    );
};
