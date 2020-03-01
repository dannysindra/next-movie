import ApolloClient from 'apollo-boost';

import { firebase } from './utils/auth';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI,
    request: async operation => {
        const user = firebase.auth().currentUser;
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
