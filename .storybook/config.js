import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import requireContext from 'require-context.macro';

import { GlobalStyles } from '../src/styles';

addDecorator(story => <GlobalStyles>{story()}</GlobalStyles>);

addDecorator(withA11y);

addParameters({
    backgrounds: [{ name: 'primary', value: '#0e2431', default: 'true' }],
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

// automatically import all files ending in *.stories.js
configure(requireContext('../src/components', true, /\.stories\.js$/), module);
