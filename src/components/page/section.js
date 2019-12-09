import React from 'react';

import { Root, Title, Content } from './styled/section';
import { Heading } from './styled/common';

export const Section = ({ label, children }) => (
    <Root>
        <Title>
            <Heading>{label}</Heading>
        </Title>
        <Content>{children}</Content>
    </Root>
);
