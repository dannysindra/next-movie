import { API_TV_POPULAR, API_TV_DETAILS } from '../../apis';

import { popular } from './constants';
import {
    requestTvs,
    receiveTvs,
    receiveTvsError,
    requestTvById,
    receiveTvById,
    receiveTvByIdError
} from './actions';

const fetchTvs = ({ namespace, api } = {}) => () => async dispatch => {
    dispatch(requestTvs({ namespace }));

    let response;
    let json;

    try {
        response = await fetch(api);
        json = await response.json();
    } catch (error) {
        dispatch(receiveTvsError({ namespace, error }));
    }

    if (!response.ok) {
        dispatch(
            receiveTvsError({
                namespace,
                error: new Error(response.statusText)
            })
        );
    } else {
        dispatch(receiveTvs({ ...json, namespace }));
    }
};

export const fetchPopularTvs = fetchTvs({
    namespace: popular,
    api: API_TV_POPULAR
});

export const fetchTvById = id => async dispatch => {
    dispatch(requestTvById());

    let response;
    let json;

    try {
        response = await fetch(API_TV_DETAILS(id));
        json = await response.json();
    } catch (error) {
        dispatch(receiveTvByIdError({ error }));
    }

    if (!response.ok) {
        dispatch(receiveTvByIdError({ error: new Error(response.statusText) }));
    } else {
        dispatch(receiveTvById(json));
    }
};
