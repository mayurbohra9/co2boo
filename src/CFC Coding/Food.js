import React, {useState} from 'react';
import ReactDOM from "react-dom";
import DOMContentLoaded from 'react';
import {} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";


import renderSwitch, {renderSwitchApple, renderSwitchAvocado, renderSwitchBanana, renderSwitchBeans, renderSwitchBeef, renderSwitchBeer
    ,renderSwitchBerriesAndGrapes, renderSwitchBread, renderSwitchCheese, renderSwitchChicken, renderSwitchChocolateDark, renderSwitchChocolateMilk
    ,renderSwitchCitrus, renderSwitchCoffee, renderSwitchEggs, renderSwitchFishFarmed, renderSwitchLamb, renderSwitchMilkAlmond, renderSwitchMilkDairy
    ,renderSwitchMilkOat, renderSwitchMilkRice, renderSwitchMilkSoy, renderSwitchNuts, renderSwitchOatmeal, renderSwitchPasta, renderSwitchPeas,
    renderSwitchPork, renderSwitchPotatoes, renderSwitchPrawnsFarmed, renderSwitchRice,renderSwitchTea,renderSwitchTofu,renderSwitchTomatoes,
    renderSwitchWine} from "./renderSwitch";

import { PieChart } from 'react-minimal-pie-chart';
  

    export function FoodList()
    {
        const[input,setInput] = useState({
            applekg: 0,
            avocadokg: 0,
        })

        function handleData(e)
        {
            e.preventDefault()
            console.warn("all data", input)
        }

        function co2(data)
        {
            return data*3;
        }
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

        return <div>
            <form>

                <h1 style={{ fontSize: 20, color: "green"}}>
					&nbsp;Fruits
				
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</h1>
                <div>
                    Apple <input style={{ width:"20px" }} onChange={handleChange} name = "applekg"  value = {input.applekg} ></input> kg.
                </div>




                <br /> <br/> <br/>

                <h1 style={{ fontSize: 20, color: "green"}}>
					&nbsp;Vegetables
				
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</h1>

                <div>
                    Avocado <input style={{ width:"20px" }} onChange={handleChange} name = "avocadokg"  value = {input.avocadokg} ></input> kg.
                </div>
                

                <br/>

                <br /> <br/> <br/>
				<button  onClick = {handleData}   style = {{font: 'inherit', cursor: 'pointer', 
								border: '1px solid bisque', background: 'bisque', color: 'black', padding:'0.5rem 2rem'}}>Submit</button>

				<br/>
				<br/>
							
				<br/><br/>
					
                <PieChart
				data={[
					{ title: 'Apple ' , value: co2(input.applekg), color: '#E38627' },
                    { title: 'Avocado ' , value: co2(input.avocadokg), color: '#194D33' },
				]}/>		
						
							
			</form>	

            

        </div>
    }









      /*function showOptions(name, setmethod)
	{
		return <div>
			<select value={name} onChange={setmethod} style = {{background: "bisque", color: 'black', border: '1px solid bisque'}}>
				<option value="frequency1">Never</option>
				<option value="frequency2">1-2 times a week</option>
				<option value="frequency3">3-5 times a week</option>
				<option value="frequency4">Once a day</option>
				<option value="frequency5">Twice a day</option>
			</select>

		</div>
	}*/