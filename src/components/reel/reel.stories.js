import React from 'react';
import { Block } from 'baseui/block';

import { InfoButton, WatchlistButton } from '../button';

import { Reel } from './reel';

export default {
    title: 'components|Hero'
};

const movies = [
    {
        id: 0,
        backdropImgUrl: {
            small:
                'https://image.tmdb.org/t/p/original/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
            original:
                'https://image.tmdb.org/t/p/original/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg'
        },
        posterImgUrl: {
            medium:
                'https://image.tmdb.org/t/p/w500/9Vp8MKqrwRAtvACF7PBwbvdG4dq.jpg',
            larger:
                'https://image.tmdb.org/t/p/w500/9Vp8MKqrwRAtvACF7PBwbvdG4dq.jpg'
        },
        title: 'Jumanji: The Next Level',
        releaseDate: 'December 12, 2019'
    },
    {
        id: 1,
        backdropImgUrl: {
            small:
                'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg',
            original:
                'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg'
        },
        posterImgUrl: {
            medium:
                'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg',
            larger:
                'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg'
        },
        title: 'Midway',
        releaseDate: 'November 5, 2019'
    },
    {
        id: 2,
        backdropImgUrl: {
            small:
                'https://image.tmdb.org/t/p/w1280/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg',
            original:
                'https://image.tmdb.org/t/p/w1280/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg'
        },
        posterImgUrl: {
            medium:
                'https://image.tmdb.org/t/p/w500/4Fc3UkAyXIKWW8jrCQpvOkTE1gy.jpg',
            larger:
                'https://image.tmdb.org/t/p/w500/4Fc3UkAyXIKWW8jrCQpvOkTE1gy.jpg'
        },
        title: 'The Irishman',
        releaseDate: 'October 31, 2019'
    },
    {
        id: 3,
        backdropImgUrl: {
            small:
                'https://image.tmdb.org/t/p/w1280/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
            original:
                'https://image.tmdb.org/t/p/w1280/n3UanIvmnBlH531pykuzNs4LbH6.jpg'
        },
        posterImgUrl: {
            medium:
                'https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
            larger:
                'https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg'
        },
        title: 'Ford v Ferrari',
        releaseDate: 'November 12, 2019'
    },
    {
        id: 4,
        backdropImgUrl: {
            small:
                'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg',
            original:
                'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg'
        },
        posterImgUrl: {
            medium:
                'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg',
            larger:
                'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg'
        },
        title: 'Midway',
        releaseDate: 'November 5, 2019'
    }
];

export const base = () => (
    <Reel
        index={0}
        movies={movies}
        controls={
            <>
                <WatchlistButton>Watchlist</WatchlistButton>
                <Block display="inline" marginRight="scale600" />
                <InfoButton>More Info</InfoButton>
            </>
        }
    />
);

export const loading = () => (
    <Reel
        index={0}
        movies={[]}
        controls={
            <>
                <WatchlistButton>Watchlist</WatchlistButton>
                <Block display="inline" marginRight="scale600" />
                <InfoButton>More Info</InfoButton>
            </>
        }
    />
);
