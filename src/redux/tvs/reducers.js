import { createReducer } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';

import {
    requestTvs,
    receiveTvs,
    receiveTvsError,
    requestTvById,
    receiveTvById,
    receiveTvByIdError
} from './actions';
import { tvSchema } from './schemas';

const initialState = {
    data: {},
    errors: {},
    fetching: {}
};

const tvsReducer = createReducer(initialState, {
    [requestTvs]: (state, { payload }) => {
        const { namespace } = payload;

        return {
            ...state,
            fetching: {
                ...state.fetching,
                [namespace]: true
            }
        };
    },
    [receiveTvsError]: (state, { payload }) => {
        const { namespace, error } = payload;

        return {
            ...state,
            errors: {
                ...state.errors,
                [namespace]: error
            },
            fetching: {
                ...state.fetching,
                [namespace]: false
            }
        };
    },
    [receiveTvs]: (state, { payload }) => {
        const { namespace, results } = payload;
        const { entities, result } = normalize(results, [tvSchema]);

        return {
            data: {
                ...state.data,
                tvs: { ...state.data.tvs, ...entities.tvs },
                [namespace]: result
            },
            errors: {
                ...state.errors,
                [namespace]: null
            },
            fetching: {
                ...state.fetching,
                [namespace]: false
            }
        };
    },
    [requestTvById]: state => ({
        ...state,
        fetching: {
            ...state.fetching,
            byId: true
        }
    }),
    [receiveTvByIdError]: (state, { payload }) => ({
        ...state,
        errors: {
            ...state.errors,
            byId: payload.error
        },
        fetching: {
            ...state.fetching,
            byId: false
        }
    }),
    [receiveTvById]: (state, { payload }) => {
        const { entities } = normalize(payload, tvSchema);

        return {
            data: {
                ...state.data,
                tvs: { ...state.data.tvs, ...entities.tvs }
            },
            errors: {
                ...state.errors,
                byId: null
            },
            fetching: {
                ...state.fetching,
                byId: false
            }
        };
    }
});

export default tvsReducer;
