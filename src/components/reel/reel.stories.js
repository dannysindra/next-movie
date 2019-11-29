import React from 'react';
import { Reel } from './reel';

export default {
    title: 'Reel'
};

const movies = [
    {
        id: '0',
        backdropImgUrl:
            'https://image.tmdb.org/t/p/w1280/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
        posterImgUrl:
            'https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
        title: 'Ford v Ferrari',
        tagline: 'They took the American dream for a ride'
    },
    {
        id: '1',
        backdropImgUrl:
            'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg',
        posterImgUrl:
            'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg',
        title: 'Midway',
        tagline: 'One battle turned the tide of war'
    },
    {
        id: '2',
        backdropImgUrl:
            'https://image.tmdb.org/t/p/w1280/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg',
        posterImgUrl:
            'https://image.tmdb.org/t/p/w500/4Fc3UkAyXIKWW8jrCQpvOkTE1gy.jpg',
        title: 'The Irishman',
        tagline: 'His story changed history'
    },
    {
        id: '3',
        backdropImgUrl:
            'https://image.tmdb.org/t/p/w1280/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
        posterImgUrl:
            'https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
        title: 'Ford v Ferrari',
        tagline: 'They took the American dream for a ride'
    },
    {
        id: '4',
        backdropImgUrl:
            'https://image.tmdb.org/t/p/w1280/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg',
        posterImgUrl:
            'https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg',
        title: 'Midway',
        tagline: 'One battle turned the tide of war'
    }
];

export const base = () => <Reel index={0} movies={movies} />;
