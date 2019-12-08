import { createAction } from '@reduxjs/toolkit';

export const requestTvById = createAction('next-movie/tvs/REQUEST_TV_BY_ID');
export const receiveTvById = createAction('next-movie/tvs/RECEIVE_TV_BY_ID');
export const receiveTvByIdError = createAction(
    'next-movie/tvs/RECEIVE_TV_BY_ID_ERROR'
);
export const requestTvs = createAction('next-movie/tvs/REQUEST_TVS');
export const receiveTvs = createAction('next-movie/tvs/RECEIVE_TVS');
export const receiveTvsError = createAction('next-movie/tvs/RECEIVE_TVS_ERROR');
