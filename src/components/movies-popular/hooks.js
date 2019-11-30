import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPopularMovies, queryPopularMovies } from '../../redux';

export const useFetchPopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    return useSelector(queryPopularMovies);
};
