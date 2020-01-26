import React from 'react';
import { Block } from 'baseui/block';
import { withRouter } from 'react-router-dom';

import { InfoButton } from '../../components';
import { WatchlistButton } from '../button';

export const HeroControlsView = ({ id, history }) => {
    const onClickMore = () => {
        history.push(`/movie/${id}`);
    };

    return (
        <>
            <InfoButton onClick={onClickMore}>More Info</InfoButton>
            <Block display="inline" marginRight="scale600" />
            <WatchlistButton id={id}>Watchlist</WatchlistButton>
        </>
    );
};

export const HeroControls = withRouter(HeroControlsView);
