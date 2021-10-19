import { useEffect, useState } from "react"
import intializAuthentication from "../Firebase/firebase.init";
import {
    
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
  } from "firebase/auth";

intializAuthentication();

const useFirebase = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
    

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
   
   
    
    //Sign In With Google
    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider)
      .finally(() => { setLoading(false) });
            
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
        
        alert("user has been created");
      })
      .catch((err) => {
        
      });
    }
    // Email sign in
    function signInWithEmail(e) {
      e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password);
    }

   
   
    // sign out
    function logOut() {
      setLoading(true);
      signOut(auth)
          .then(() => {
              setUser({})
          })
          .finally(() => setLoading(false))
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
    },[])
    return {
      user,
      logOut,
      error,
      loading,
      getUserEmail,
      getUserPassword,
      signInUsingGoogle,
      signInWithEmail,
      createAccount,
      getUserName,
        
    }
}

export default useFirebase;