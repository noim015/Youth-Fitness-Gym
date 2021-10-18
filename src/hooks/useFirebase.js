import { useEffect, useState } from "react"
import intializAuthentication from "../Firebase/firebase.init";
import {
    sendEmailVerification,
    updateProfile,
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";

intializAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
   
    // clear error
    useEffect(() => {
        setTimeout(() => {
        setError("");
        }, 5000);
    }, [error]);
    
    //Sign In With Google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    
    //Get User Name
    const getUserName = e => {
        setName(e.target.value);
      }
    //Get user Email
      const getUserEmail = e => {
        setEmail(e.target.value);
      }
    //Get user Password
      const getUserPassword = e => {
        setPassword(e.target.value)
      }
    
    //Create user account
    const createAccount = (e) => {
        e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndImage();
        alert("user has been created");
      })
      .catch((err) => {
        setError(err.message);
      });
    }

    // set name and profile image url
  const setNameAndImage= () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }
   
    // sign out
    function logOut() {
        signOut(auth)
        .then((res) => {
            setUser({});
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                
            }
        })
    },[])
    return {
        user,
        logOut,
        error,
        signInUsingGoogle,
        createAccount,
        getUserName,
        getUserEmail,
        getUserPassword
        
    }
}

export default useFirebase;