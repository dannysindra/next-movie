import React from 'react';

import { Section } from './styled';

export const MovieSection = ({ label, data }) => {
    return (
        <Section>
            <Section.Label>
                <Section.H>{label}</Section.H>
            </Section.Label>
            <Section.Content>
                <Section.P>{data}</Section.P>
            </Section.Content>
        </Section>
    );
};
