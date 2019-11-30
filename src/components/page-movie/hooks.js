import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchMovieById, queryMovieById } from '../../redux';

export const useFetchMovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [id, dispatch]);

    return useSelector(queryMovieById(id));
};
