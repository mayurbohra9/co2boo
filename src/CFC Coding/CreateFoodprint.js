import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form} from 'react-bootstrap'


export function CreateFoodprintForm()
{

    const[input,setInput] = useState({
        Food: '',
        CO2value: ''
    })

    function handleChange(event)
    {
        const{name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event)
    {
        event.preventDefault();
        const newFoodprint = {
            Food: input.Food,
            CO2value: input.CO2value
        }
        axios.post('http://localhost:3001/create', newFoodprint)
        alert("Foodprint added. Thank you!");
        document.getElementById("myForm").reset();
     
    }

  

    return <div>
        <Form id = "myForm">
           <Form.Group>
           <Form.Label>Enter your values for CO2 foodprint:
               </Form.Label>

               <Form.Control  onChange={handleChange} value = {input.Food} name ="Food" placeholder ="Food Name"/>
               

                <Form.Control onChange={handleChange} value = {input.CO2value} name = "CO2value" placeholder="CO2 Value"/>
                <br></br>
           
            <Button onClick = {handleClick} style = {{font: 'inherit', cursor: 'pointer', 
								border: '1px solid bisque', background: 'bisque', color: 'black', padding:'0.5rem 2rem'}}>Add Foodprint</Button>
        


           </Form.Group>
           </Form>

    </div>
}

