import React, { useState } from 'react';
import './Createaccount.css';
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import logo from './logo.png';
import {auth, db} from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { snapshotEqual } from 'firebase/firestore';


function Createaccount() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setdob] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const user = auth.currentUser;

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Passwords do not match')  
          }
        }
        return isValid
      }

      
    
    function createUserProfile(){
        db.collection('UserInfo')

        .add({
            emailL: email,
            firstName: firstName, 
            lastName: lastName, 
            gender: gender, 
            dob: dob, 
            phoneNo: phoneNo, 
        });
    };


    const register = e =>
    {
        e.preventDefault()
        setError('')

        if(validatePassword()){
            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    
                    createUserProfile();
                   
                    navigate('/home')
                }
            })
            .catch(error => alert(error.message))

        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }


  return (
    <div className='login'>

        <div className = "login__logo">
             <img src = {logo}/>
        </div>

        {error && <div className='auth__error'>{error}</div>}
        <div className='login__container'>
            <h1>Create a New Account</h1>
            
            <form id = "user-profile-info">
                <h5>Email ID*</h5>
                <input type = 'email' value = {email} required 
                onChange = {e => setEmail(e.target.value)}/>

                <h5>Password*</h5>
                <input type = 'password' value = {password} required 
                onChange = {e => setPassword(e.target.value)}/>

                <h5>Confirm Password*</h5>
                <input type = 'password' value = {confirmPassword} required 
                onChange = {e => setConfirmPassword(e.target.value)}/>

                <h5>First Name</h5>
                <input type = 'text' value = {firstName} onChange =
                {e => setFirstName(e.target.value)}/>
                
                <h5>Last Name</h5>
                <input type = 'text' value = {lastName} onChange =
                {e => setLastName(e.target.value)}/>
                
                <h5>Date of Birth</h5>
                <input type = 'text' value = {dob} onChange =
                {e => setdob(e.target.value)}/>

                <h5>Gender</h5>
                <input type = 'text' value = {gender} onChange =
                {e => setGender(e.target.value)}/>
                
                <h5>Phone Number</h5>
                <input type = 'text' value = {phoneNo} onChange =
                {e => setPhoneNo(e.target.value)}/>

                <button type = 'submit' onClick = {register}
                className='login__signInButton'>Create Account
                </button>

            </form>
            <p>
                (*) Required field
            </p>
            <p>
                By siging-in you agree to the conditions of Use. Please see our Privacy Notice, our Cookies Notice and our Interest based Ads Notice.
            </p>
        </div>
    </div>
    
  )
}

export default Createaccount
