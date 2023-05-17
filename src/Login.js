import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import logo from './logo.png';
import {auth} from "./firebase";
import {Button} from "./components/Button"

import Navbar from './components/navbar/Navbar';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>
    {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/daily-logs')
            })
            .catch(error => alert(error.message))
        // firebase login
    }

    const register = e =>
    {
        navigate('/create-account')
    }



  return (
    <div className='login'>
        <div className = "login__logo">
             <img src = {logo}/>
        </div>
       
        <div className='login__container'>
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange =
                {e => setEmail(e.target.value)}/>
                
                <h5>Password</h5>
                <input type = 'password' value = {password} onChange =
                {e => setPassword(e.target.value)}/>
                
                <Button type = 'submit' onClick = {signIn}
                className='login__signInButton'>Sign In
                </Button>

            </form>

            <p>
                By siging-in you agree to the conditions of Use. Please see our Privacy Notice, our Cookies Notice and our Interest based Ads Notice.
            </p>
            <button onClick = {register}
            className='login__registerButton'>Create your CO2boo account</button>
        </div>
    </div>
    
  )
}

export default Login