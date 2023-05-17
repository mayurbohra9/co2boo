import React, { Component } from "react";
import {MenuItems} from "./MenuItem";
import './Navbar.css';
import {Button} from '../Button'
import {auth} from "../../firebase";
import {useNavigate } from "react-router-dom";
import logo from '../../logo5.png';

function Navbar() {
    const navigate = useNavigate(); 

    return(
        <nav className="NavbarItems">
            
            <div className="menu-icon" >
                <i className={'fas fa-times'}>
                </i>

            </div>
            <ul className={'nav-menu active'}>
                {MenuItems.map((item, index)=> {
                    return (
                        <li key={index}>
                            <a className={item.cName} onClick= {() =>navigate(item.url)}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}


            </ul>
        </nav>
    )
    }


export default Navbar