import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


// Initialize Firebase
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    console.log(admin);

    const auth = getAuth();

    const registerUser = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email: email, displayName: name };
                setUser(newUser);

                // save user to the database
                saveUser(email, name);

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setAuthError(error.message);
                });
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setAuthError('')
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    }

    const logoutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser()
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch("https://ancient-springs-28186.herokuapp.com/user", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // User on state changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                setIsLoading(false);
                // ...
            } else {
                // User is signed out
                setUser()
                setIsLoading(false)
            }
        });
    }, [])
    useEffect(() => {
        fetch(`https://ancient-springs-28186.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.role == 'admin') {
                    setAdmin(true);
                }
                else {
                    setAdmin(false)
                }
            })
    }, [user?.email])
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logoutUser,
        admin
    }
};

export default useFirebase;