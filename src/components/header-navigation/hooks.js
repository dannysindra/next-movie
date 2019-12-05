import { useEffect, useState } from 'react';

export const useModal = initialState => {
    const [isLoginOpen, setIsLoginOpen] = useState(initialState);

    const openLogin = event => {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        setIsLoginOpen(true);
    };

    const closeLogin = event => {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        setIsLoginOpen(false);
    };

    return {
        isOpen: isLoginOpen,
        open: openLogin,
        close: closeLogin
    };
};

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
