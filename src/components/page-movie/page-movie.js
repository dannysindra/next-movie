import React from 'react';
import { Block } from 'baseui/block';

import { useFetchMovieDetails } from './hooks';

export const PageMovie = () => {
    const movie = useFetchMovieDetails();

    return <Block>{JSON.stringify(movie)}</Block>;
};
