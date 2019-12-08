import { popular } from './constants';

const queryData = state => state.tvs.data;

const queryNamespaceTvs = ({ namespace, limit } = {}) => state => {
    const data = queryData(state);

    if (!data[namespace]) {
        return [];
    }

    return data[namespace]
        .slice(0, limit || data[namespace].length)
        .map(id => data.tvs[id]);
};

export const queryPopularTvs = queryNamespaceTvs({ namespace: popular });

export const queryTvById = id => state => {
    const data = queryData(state);

    if (!data.tvs || !data.tvs[id]) {
        return null;
    }

    return data.tvs[id];
};
