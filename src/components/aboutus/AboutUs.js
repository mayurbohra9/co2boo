import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from '../dailylogs/StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import background from "../../img/background.jpg";

function AboutUs(){
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }
    
    return(
        <div>
            <Navbar/>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, marginTop: `-50px`, minHeight: `100vh`}}>
                <div className='header-card'> 
                    <h1> About Us </h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUs