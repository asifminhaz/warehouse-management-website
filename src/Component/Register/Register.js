import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
          const navigate = useNavigate()

          const navigateLogin = () => {
                    navigate('/login')
          }

          const handleRegister = event => {
                    event.preventDefault()
                    const name = event.target.name.value
                    const email = event.target.email.value
                    const password = event.target.password.value
                    
          }
          return (
                    <div className='register'>
                        <h1 className='text-center'>Please register</h1> 
                        <form onSubmit={handleRegister}>
                                 <input type="text" name="name" id="" placeholder=' your name' />
                                 <br></br>
                                 <input type="email" name="email" id="" placeholder='enter your email' required/>
                                 <br></br>
                                 <input type="password" name="password" id="" placeholder='password' required />
                                 <br></br>
                                 <input className='btn btn-primary' type="submit" value="Register" />
                    </form>     
                    <p>Already have an account?<Link to='/login' className='text-danger' onClick={navigateLogin}>Please Log in</Link></p>
                    </div>
          );
};

export default Register;