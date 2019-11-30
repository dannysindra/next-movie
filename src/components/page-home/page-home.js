import React from 'react';
import { Block } from 'baseui/block';

import { Hero } from '../hero';
import { MoviesPopular } from '../movies-popular';

import { Content } from './styled';

export const PageHome = () => {
    return (
        <Block>
            <Hero />
            <Content>
                <MoviesPopular />
            </Content>
        </Block>
    );
};
