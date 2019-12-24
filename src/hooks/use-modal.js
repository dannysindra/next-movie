import { useState } from 'react';

export const useModal = initialState => {
    const [isOpen, setIsOpen] = useState(initialState);

    const onOpen = event => {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        setIsOpen(true);
    };

    const onClose = event => {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        setIsOpen(false);
    };

    return {
        isOpen,
        onOpen,
        onClose
    };
};
