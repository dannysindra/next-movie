import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUpcomingMovies, queryUpcomingMovies } from '../../redux';

const useInterval = (callback, delay, reset) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay, reset]);
};

export const useReel = ({
    initialIndex = 0,
    numberOfItems = 0,
    duration = 7000
}) => {
    const [index, setIndex] = useState(initialIndex);
    const [reset, toggleReset] = useState(false);

    useInterval(
        () => {
            if (numberOfItems > 0) {
                setIndex(prevIndex => (prevIndex + 1) % numberOfItems);
            }
        },
        duration,
        reset
    );

    const onItemClick = (event, index) => {
        setIndex(index);
        toggleReset(prev => !prev);
        event.stopPropagation();
    };

    return [index, onItemClick];
};

export const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [dispatch]);

    return useSelector(queryUpcomingMovies);
};
