import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="space-y-2 *:w-full">
                <button className="btn"><FaGoogle />Log in with Google</button>

                <button className="btn"><FaGithub/>Log in With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;