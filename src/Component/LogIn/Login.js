import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './firebase.init';
import Loading from './Loading';

const Login = () => {
          const emailRef = useRef('')
          const passwordRef= useRef('')
          const navigate = useNavigate()
          const location = useLocation();
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useSignInWithEmailAndPassword(auth);
                  let from = location.state?.from?.pathname || "/";
                  let errorElement;
                  if (loading ) {
                    return <Loading></Loading>
                }
            
if(user){
  navigate(from, { replace: true });
}
if (error) {
  errorElement = <p className='text-danger'>Error: {error?.message}</p>
}

          const handleSubmit = event => {
                    event.preventDefault();
                    const email = emailRef.current.value
                    const password = passwordRef.current.value
                    signInWithEmailAndPassword(email, password)
          }

          const navigateRegister = event => {
                    navigate('/register')
          }
          const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                await sendPasswordResetEmail(email);
                toast('Sent email');
            }
            else{
                toast('please enter your email address');
            }
        }
          return (
                    <div className='container w-50 mx-auto'>
                             <h1 className='text-center'>Please Log in</h1> 
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>New to Motodeal?<Link to='/register' className='text-danger' onClick={navigateRegister}>Please register</Link></p>
  <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
</Form>
{errorElement}
<SocialLogin></SocialLogin>
<ToastContainer />

 </div>
          );
};

export default Login;