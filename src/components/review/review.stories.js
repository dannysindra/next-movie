import React from 'react';
import { action } from '@storybook/addon-actions';

import { fixtures } from '../../utils';
import { Review } from './review';

export default {
    title: 'components|Review'
};

export const base = () => (
    <Review
        data={fixtures.movie.reviews}
        onClickReview={() => action('onClickReview clicked')}
    />
);
