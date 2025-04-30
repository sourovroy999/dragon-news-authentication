import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext=createContext(null)
const googleProvider=new GoogleAuthProvider();
const GitHubProvider=new GithubAuthProvider()

const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState()
    const[loading,setLoading]=useState(true)

    // console.log(loading,user);
    

    const createUser=(email, password)=>{
         setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
     }

   
    const signIn=(email, password)=>{ 
        
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
       
    }


    const googleSignIn=()=>{
        setLoading(true)

        return signInWithPopup(auth, googleProvider)
    }

    const GitHubSignIn=()=>{
        setLoading(true)

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

    // sendEmailVerification(auth.currentUser)
    // .then(console.log('verification email sent')
    // )


    const sendVerificationEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const resetPassword=(email)=>{
       return sendPasswordResetEmail(auth, email)
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
        sendVerificationEmail,
        resetPassword,


    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        // unmount
        return ()=>{
            unSubscribe()
        }
    })
    
    return <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
};

export default AuthProvider;

