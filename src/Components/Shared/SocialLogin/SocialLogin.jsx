import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="card">
            <div className='card-body pt-4'>
                <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-[#04D912] hover:text-white text-black border-black">
                    <FcGoogle size={28}></FcGoogle> <span className='pl-2'>Sign-in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;