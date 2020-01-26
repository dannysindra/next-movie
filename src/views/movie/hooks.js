import { useHistory, useParams } from 'react-router-dom';

import { useQueryMovieById } from '../../utils/graphql';

export const useMovie = () => {
    const history = useHistory();
    const { id } = useParams();
    const result = useQueryMovieById({
        variables: {
            id: parseInt(id)
        }
    });

    const navigateTo = movieId => {
        history.push(`/movie/${movieId}`);
    };

    return [{ ...result, id }, navigateTo];
};
