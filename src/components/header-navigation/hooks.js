import { useState } from 'react';

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
