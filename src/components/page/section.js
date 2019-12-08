import React from 'react';

import { Root, Title, Content } from './styled/section';
import { Heading, Paragraph } from './styled/common';

export const Section = ({ label, data }) => (
    <Root>
        <Title>
            <Heading>{label}</Heading>
        </Title>
        <Content>
            <Paragraph>{data}</Paragraph>
        </Content>
    </Root>
);
