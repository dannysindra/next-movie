import React from 'react';

import { fixtures } from '../../utils';
import { Cast, Crew } from './credit';

export default {
    title: 'components|Credit'
};

export const cast = () => <Cast data={fixtures.movie.cast} />;
export const crew = () => <Crew data={fixtures.movie.crew} />;
