import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Search as BaseSearch } from 'next-movie-components';

import { initTypeahead } from './typeahead';

export const Search = props => {
    const history = useHistory();

    useEffect(() => {
        initTypeahead('#typeahead', id => {
            history.push(`/movie/${id}`);
        });
    }, [history]);

    return (
        <BaseSearch
            id="typeahead"
            placeholder="Search a movie by title"
            {...props}
        />
    );
};
