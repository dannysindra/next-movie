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

export const useModal = initialState => {
    const [isLoginOpen, setIsLoginOpen] = useState(initialState);

    const openLogin = e => {
        setIsLoginOpen(true);
        e.stopPropagation();
    };

    const closeLogin = e => {
        if (e) {
            e.stopPropagation();
        }

        setIsLoginOpen(false);
    };

    return {
        isOpen: isLoginOpen,
        open: openLogin,
        close: closeLogin
    };
};
