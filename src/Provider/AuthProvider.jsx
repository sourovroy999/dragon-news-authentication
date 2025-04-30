import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext=createContext(null)
const googleProvider=new GoogleAuthProvider();
const GitHubProvider=new GithubAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser]=useState()
    const[loading,setLoading]=useState(true)

    // console.log(loading,user);
    
    const auth=getAuth(app)

    const createUser=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

       
    }

    const signIn=(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }


    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const GitHubSignIn=()=>{
        return signInWithPopup(auth, GitHubProvider)
    }

    const Logout=()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            // console.log('sign out successfully');
            
        })
        .catch((error)=>{
            console.log( error, 'error occured');
            
        })
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo={
        user, 
        setUser,
        createUser,
        signIn,
        Logout,
        loading,
        updateUserProfile,
        googleSignIn,
        GitHubSignIn,

    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    })
    
    return <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
};

export default AuthProvider;

