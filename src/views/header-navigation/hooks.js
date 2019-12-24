import { useEffect, useState } from 'react';

export const useVisibility = () => {
    const [transparent, setTransparent] = useState(true);

    const onScroll = () => {
        setTransparent(window.scrollY <= 5);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return transparent;
};
