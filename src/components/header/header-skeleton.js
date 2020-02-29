import React from 'react';
import { Block } from 'baseui/block';

import { usePulseAnimation } from '../../styles';

import { Root, Separator, Media, Details, Metadata, Info } from './styled';

export const HeaderSkeleton = () => {
    const pulseClass = usePulseAnimation();

    return (
        <Root>
            <Media>
                <Media.Poster>
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        display={['none', 'block', 'block']}
                        width="100%"
                        height={['0', '280px', '512px']}
                    />
                </Media.Poster>
                <Separator />
                <Media.Video>
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        display={['none', 'block', 'block']}
                        width="100%"
                        height={['0', '280px', '512px']}
                    />
                </Media.Video>
            </Media>
            <Details>
                <Metadata>
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        marginBottom="5px"
                        width="80px"
                        height="15px"
                    />
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        width="200px"
                        height="15px"
                    />
                    <Block height="10px" />
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        marginBottom="5px"
                        width="80px"
                        height="15px"
                    />
                    <Block
                        backgroundColor="mono700"
                        className={pulseClass}
                        width="200px"
                        height="15px"
                    />
                </Metadata>
                <Info>
                    <Info.Title>
                        <Block
                            backgroundColor="mono700"
                            className={pulseClass}
                            width="300px"
                            height="30px"
                        />
                    </Info.Title>
                    <Info.Subtitle>
                        <Block
                            backgroundColor="mono700"
                            className={pulseClass}
                            width="200px"
                            height="20px"
                        />
                    </Info.Subtitle>
                    <Block width="100%" height="150px" />
                </Info>
            </Details>
        </Root>
    );
};
