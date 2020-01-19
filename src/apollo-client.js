import ApolloClient from 'apollo-boost';

import { Firebase } from './utils';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI,
    request: async operation => {
        const user = Firebase.firebase.auth().currentUser;
        let token;

        if (user) {
            token = await user.getIdToken();
        }

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    }
});
