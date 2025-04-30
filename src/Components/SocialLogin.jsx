import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn, GitHubSignIn, setUser}=useContext(authContext)

    const handleGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
                console.log(result.user);
                
            })
            .catch(error=>{
                console.log(error.message);
                
            })
    }

    const handleGitHubSignIn=()=>{
        GitHubSignIn()
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
            // updateUserProfile({displayName:result.user, photoURL:result.photoURL})
            
        })
        .catch(error=>{
            console.log('ERROR' ,error.message);
            
        })

    }
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="space-y-2 *:w-full">
                <button onClick={handleGoogleSignIn} className="btn"><FaGoogle />Log in with Google</button>

                <button onClick={handleGitHubSignIn} className="btn"><FaGithub/>Log in With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;