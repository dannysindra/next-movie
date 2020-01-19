import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Firebase } from '../../utils';

export const FirebaseUI = ({ onLoginSuccess }) => {
    const firebase = Firebase.useFirebase();

    /**
     * StyledFirebaseUI configuration
     * https://github.com/firebase/firebaseui-web-react
     */
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                onLoginSuccess();
                return false;
            }
        }
    };

    return (
        <StyledFirebaseAuth
            firebaseAuth={firebase.auth()}
            uiConfig={uiConfig}
        />
    );
};
