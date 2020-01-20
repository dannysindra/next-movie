import React from 'react';
import { Block } from 'baseui/block';

import { Root, Backdrop, Body, Metadata, Carousel, Thumbnail } from './styled';

export const ReelSkeleton = () => {
    return (
        <Root>
            <Backdrop>
                <Backdrop.Mask />
                <Backdrop.Vignette />
            </Backdrop>
            <Body>
                <Body.Left>
                    <Block
                        width="100%"
                        height="100%"
                        backgroundColor="mono700"
                    />
                </Body.Left>
                <Body.Right>
                    <Metadata>
                        <Metadata.Title>
                            <Block
                                width="300px"
                                height="30px"
                                backgroundColor="mono700"
                            />
                        </Metadata.Title>
                        <Metadata.Subtitle>
                            <Block
                                width="200px"
                                height="20px"
                                backgroundColor="mono700"
                            />
                        </Metadata.Subtitle>
                    </Metadata>
                    <Carousel>
                        {[0, 1, 2, 3, 4].map(el => (
                            <Thumbnail key={el}>
                                <Block
                                    width="100%"
                                    height="100%"
                                    backgroundColor="mono700"
                                />
                            </Thumbnail>
                        ))}
                    </Carousel>
                </Body.Right>
            </Body>
        </Root>
    );
};
