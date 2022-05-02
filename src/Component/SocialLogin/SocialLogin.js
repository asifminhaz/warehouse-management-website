import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../LogIn/firebase.init';

const SocialLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
          const navigate = useNavigate();
          const location = useLocation();
          let from = location.state?.from?.pathname || "/";
          let errorElement;
          if (user) {
                    navigate(from, { replace: true });
                }
                if (error ) {
                    errorElement = <p className='text-danger'>Error: {error?.message}</p>
                }
            
          return (
          
                    <div>
                    { errorElement }
                     <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                </button>
                    </div>
          );
};

export default SocialLogin;