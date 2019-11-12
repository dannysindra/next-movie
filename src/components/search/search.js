import React, { useEffect } from 'react';

import { Search as BaseSearch } from 'next-movie-components';

import { initTypeahead } from './typeahead';

export const Search = props => {
    useEffect(() => {
        initTypeahead('#typeahead', () => {});
    }, []);

    return (
        <BaseSearch
            id="typeahead"
            placeholder="Search a movie by title"
            {...props}
        />
    );
};
