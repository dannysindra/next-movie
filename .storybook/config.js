import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import requireContext from 'require-context.macro';

addDecorator(withA11y);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

// automatically import all files ending in *.stories.js
configure(requireContext('../src/components', true, /\.stories\.js$/), module);
