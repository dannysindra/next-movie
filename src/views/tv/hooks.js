import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchTvById, queryTvById } from '../../redux';

export const useFetchTvDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTvById(id));
    }, [id, dispatch]);

    return useSelector(queryTvById(id));
};
