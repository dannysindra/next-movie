import { useState } from 'react';

import { useInterval } from '../../hooks';

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
