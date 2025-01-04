// conetxt api
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

export const auth = getAuth(app);



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  

    // sign up function for providing everywhere
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
     // sign in function for providing everywhere
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logOut = () =>{
        return signOut(auth);
    }



    // to get the current user
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe(); // so that it will not hold the memory
        }
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        logOut

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider