import React from 'react';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { Label3, Paragraph1 } from 'baseui/typography';

import {
    CreditContainer,
    AvatarContainer,
    InfoContainer
} from './styled/credit';

export const Crew = ({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <Block marginTop="scale600">
            {data.map(datum => (
                <CreditContainer key={datum.creditId}>
                    <AvatarContainer>
                        <Avatar
                            name={datum.name}
                            size="scale1200"
                            src={datum.profileImgUrl}
                        />
                    </AvatarContainer>
                    <InfoContainer>
                        <Paragraph1 as="div" color="white">
                            {datum.name}
                        </Paragraph1>
                        <Label3 color="mono400">{datum.job}</Label3>
                    </InfoContainer>
                </CreditContainer>
            ))}
        </Block>
    );
};
