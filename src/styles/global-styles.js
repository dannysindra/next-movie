import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { node } from 'prop-types';

import { NextMovieTheme } from 'next-movie-components';

const engine = new Styletron();

export const GlobalStyles = ({ children }) => (
    <StyletronProvider value={engine}>
        <BaseProvider theme={NextMovieTheme}>{children}</BaseProvider>
    </StyletronProvider>
);

GlobalStyles.propTypes = {
    children: node.isRequired
};
