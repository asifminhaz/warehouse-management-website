import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './firebase.init';

const Login = () => {
          const emailRef = useRef('')
          const passwordRef= useRef('')
          const navigate = useNavigate()
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useSignInWithEmailAndPassword(auth);
if(user){
          navigate('/inventoryId')
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
</Form>
<SocialLogin></SocialLogin>

 </div>
          );
};

export default Login;