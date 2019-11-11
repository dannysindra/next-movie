import { useStyletron } from 'baseui';

export const usePrimaryColor = (styles = {}) => {
    const [useCss, theme] = useStyletron();

    return useCss({
        color: theme.colors.colorPrimary,
        ...styles
    });
};
