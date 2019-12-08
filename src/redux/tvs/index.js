import tvsReducer from './reducers';

export default tvsReducer;

export {
    requestTvById,
    receiveTvById,
    receiveTvByIdError,
    requestTvs,
    receiveTvs,
    receiveTvsError
} from './actions';

export { queryTvById, queryPopularTvs } from './selectors';

export { fetchTvById, fetchPopularTvs } from './thunks';
