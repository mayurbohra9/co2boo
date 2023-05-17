import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from '../dailylogs/StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap'
import firebase from 'firebase/compat/app';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import background from "../../img/background.jpg";

function Profile(){
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const db = firebase.firestore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }
    useEffect(() =>{
		getName()
	}, [])
    useEffect(() => {
		console.log(userInfo)
	}, [userInfo])

    const [userInfo, setUserInfo] = useState([]);

    function getName(){ 
		const userInfoRef = collection(db, "UserInfo")
		const q = query(userInfoRef, where("emailL", "==", user.email))
		getDocs(q)
			.then(response => {
				const infs = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
				setUserInfo(infs)
			})
			.catch(error => console.log("u suck"))
	}

    return(
        <div>
            <Navbar/>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, marginTop: `-50px`,height:`140vh`,marginBottom:`0px`}}>
             
              <div className='header-card'> 
                <h1> Profile Information</h1>
              </div>
              <div className='row'>
                    <div className='column'>
                      {userInfo.map(userInfo => <h1 key={userInfo}> Name: {userInfo.data.firstName} {userInfo.data.lastName}</h1>)}
                      {userInfo.map(userInfo => <h1 key={userInfo}> Date of birth: {userInfo.data.dob}</h1>)}
                      {userInfo.map(userInfo => <h1 key={userInfo}> Gender: {userInfo.data.gender}</h1>)}
                      {userInfo.map(userInfo => <h1 key={userInfo}> Email: {userInfo.data.emailL}</h1>)}
                      {userInfo.map(userInfo => <h1 key={userInfo}> Phone Number: {userInfo.data.phoneNo}</h1>)}
                    </div>
              </div>

            </div>
            
        </div>
    )
}

export default Profile