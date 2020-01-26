import React, { useContext, useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FirebaseContext = React.createContext(null);

const useFirebase = () => {
    const firebase = useContext(FirebaseContext);

    if (firebase === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return firebase;
};

export const AuthProvider = ({ children, value }) => (
    <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>
);

export const withAuth = () => Component => {
    const firebase = useFirebase();

    class WithAuth extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn: false
            };
            this.logout = this.logout.bind(this);
        }

        componentDidMount() {
            this.unregisterAuthObserver = firebase
                .auth()
                .onAuthStateChanged(user => {
                    this.setState({ isLoggedIn: !!user });
                });
        }

        componentWillUnmount() {
            this.unregisterAuthObserver();
        }

        logout() {
            firebase.auth().signOut();
        }

        render() {
            return (
                <Component
                    {...this.props}
                    isLoggedIn={this.state.isLoggedIn}
                    logout={this.logout}
                />
            );
        }
    }

    return WithAuth;
};

export const useAuth = () => {
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

// StyledFirebaseUI configuration
// https://github.com/firebase/firebaseui-web-react
export const AuthUI = ({ onLoginSuccess }) => {
    const firebase = useFirebase();

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
