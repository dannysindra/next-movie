import { useStyletron } from 'baseui';

export const usePrimaryColor = (styles = {}) => {
    const [useCss, theme] = useStyletron();

    return useCss({
        color: theme.colors.colorPrimary,
        ...styles
    });
};

// https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/Skeleton/Skeleton.js
export const usePulseAnimation = () => {
    const [useCss] = useStyletron();

    return useCss({
        animationDuration: '1.5s',
        animationDelay: '0.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationName: {
            '0%': {
                opacity: 1
            },
            '50%': {
                opacity: 0.4
            },
            '100%': {
                opacity: 1
            }
        }
    });
};
