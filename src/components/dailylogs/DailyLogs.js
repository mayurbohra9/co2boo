import React, { useEffect, useState } from 'react';
import './DailyLogs.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from './StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Button} from 'react-bootstrap'
import firebase from 'firebase/compat/app';
import background from "../../img/background.jpg";


function DailyLog(){
    /* 
	useEffect(() =>{
		getName()
	}, [])

	useEffect(() => {
		console.log(userInfo)
	}, [userInfo])

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
*/



    /*
    function showOptions(name, setmethod) {
		return <div>
			<select class="form-select" aria-label="Default select example" value={name} onChange={setmethod} >
				<option value="frequency1">Never</option>
				<option value="frequency2">1-2 times a week</option>
				<option value="frequency3">3-5 times a week</option>
				<option value="frequency4">Once a day</option>
				<option value="frequency5">Twice a day</option>
			</select>
		</div>
	}*/

    const [userInfo, setUserInfo] = useState([]);
    

    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    
    const db = firebase.firestore();
    const[allDocs, setAllDocs] = useState([]);
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }

    function fetchAll(e)
    {
        e.preventDefault();
        db.collection("users")
        .doc(user.uid)
        .collection('food info')
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    setAllDocs((prev) => {
                        return[...prev,doc.data()];
                    });
                }); 
            }
        });
        console.log(allDocs);
    }
    
    return(
        <div>
            <Navbar/>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, marginTop: `-50px`,height:`140vh`,marginBottom:`0px`}}>
                <div className='header-card'>
                    <h1> Your Food Logs </h1> 
                </div>
                <div className='row'>
                    <div className='column1'>
                    <Button type="submit" style={{
                                        font: 'inherit', cursor: 'pointer',
                                        border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem'
                                    }} onClick = {fetchAll}>View My Daily Food Logs</Button>
                    </div>
                    <div className='column2'>
                        graph of emissions
                        {allDocs.map((doc)=>{
                        return(
                            <div>
                                Created on: {doc.createdAt.toDate().toString()}
                                
                                
                                <h5>Total: {doc.total} kg per year.</h5>
                                <br>
                                </br>
                            </div> 
                        )
                    })}
                    </div>
                </div>
            </div>

            </div>
       
    )
}

export default DailyLog