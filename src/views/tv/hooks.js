import { useHistory, useParams } from 'react-router-dom';

import { useQueryTvById } from '../../utils/graphql';

export const useTv = () => {
    const history = useHistory();
    const { id } = useParams();
    const result = useQueryTvById({
        variables: {
            id: parseInt(id)
        }
    });

    const navigateTo = tvId => {
        history.push(`/tv/${tvId}`);
    };

    return [{ ...result, id }, navigateTo];
};
