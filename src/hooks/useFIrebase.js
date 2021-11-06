import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloding, setIsloding] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsloding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // sent name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloding(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsloding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const distination = location?.state?.from || '/';
                history.push(distination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloding(false));
    }

    const signInwithGoogle = (location, history) => {
        setIsloding(true);
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
                const distination = location?.state?.from || '/';
                history.push(distination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloding(false));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloding(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsloding(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsloding(false));
    }

    return {
        user,
        isloding,
        registerUser,
        loginUser,
        signInwithGoogle,
        logOut,
        authError
    }
}

export default useFirebase;