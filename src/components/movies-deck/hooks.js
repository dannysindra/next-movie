import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchPopularMovies,
    fetchNowPlayingMovies,
    queryPopularMovies,
    queryNowPlayingMovies
} from '../../redux';

const createrFetchHook = (fetch, query) => () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    const result = useSelector(query);

    if (!result) {
        return null;
    }

    return result;
};

export const useFetchPopularMovies = createrFetchHook(
    fetchPopularMovies,
    queryPopularMovies
);

export const useFetchNowPlayingMovies = createrFetchHook(
    fetchNowPlayingMovies,
    queryNowPlayingMovies
);
