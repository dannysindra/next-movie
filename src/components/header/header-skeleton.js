import React from 'react';
import { Block } from 'baseui/block';

import { Root, Separator, Media, Details, Metadata, Info } from './styled';

export const HeaderSkeleton = () => {
    return (
        <Root>
            <Media>
                <Media.Poster>
                    <Block
                        display={['none', 'block', 'block']}
                        width="100%"
                        height={['0', '280px', '512px']}
                    />
                </Media.Poster>
                <Separator />
                <Media.Video>
                    <Block
                        display={['none', 'block', 'block']}
                        width="100%"
                        height={['0', '280px', '512px']}
                    />
                </Media.Video>
            </Media>
            <Details>
                <Metadata>
                    <Block
                        width="80px"
                        height="15px"
                        marginBottom="5px"
                        backgroundColor="mono700"
                    />
                    <Block
                        width="200px"
                        height="15px"
                        backgroundColor="mono700"
                    />
                    <Block height="10px" />
                    <Block
                        width="80px"
                        height="15px"
                        marginBottom="5px"
                        backgroundColor="mono700"
                    />
                    <Block
                        width="200px"
                        height="15px"
                        backgroundColor="mono700"
                    />
                </Metadata>
                <Info>
                    <Info.Title>
                        <Block
                            width="300px"
                            height="30px"
                            backgroundColor="mono700"
                        />
                    </Info.Title>
                    <Info.Subtitle>
                        <Block
                            width="200px"
                            height="20px"
                            backgroundColor="mono700"
                        />
                    </Info.Subtitle>
                </Info>
            </Details>
        </Root>
    );
};
