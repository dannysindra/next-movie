import React, { createContext, useContext, useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID
};

firebase.initializeApp(config);

const FirebaseContext = createContext(null);

const Provider = ({ children }) => (
    <FirebaseContext.Provider value={firebase}>
        {children}
    </FirebaseContext.Provider>
);

const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (context === undefined) {
        throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
};

const useFirebaseAuth = () => {
    const firebase = useFirebase();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(user => {
                setIsLoggedIn(!!user);
            });

        return () => {
            unregisterAuthObserver();
        };
    }, [firebase]);

    return {
        isLoggedIn,
        logout: () => firebase.auth().signOut()
    };
};

export { firebase, Provider, useFirebase, useFirebaseAuth };
