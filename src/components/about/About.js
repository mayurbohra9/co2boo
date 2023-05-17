import React from 'react'
import Navbar from '../navbar/Navbar';
import './About.css';

function about() {

  return (
    <div>
        <Navbar/>
        <div className='header-card about'> 
                <h3> About Us</h3>
                <br></br>
                <h2>Current food systems account for up to ⅓ of the total carbon emissions around the world.
                The average US diet amounts to 5.0 kg CO2 eq. per person per day. 
                That is nearly 2 tonnes of CO2 per person every year.
                Animal-based foods combined represent 82% of the baseline diet greenhouse gas emissions. 
                How can we reduce our carbon emissions through our diet?
                New York Tech brings to you: CO2 Boo. It's an interactive tool available on web and mobile. 
                It was developed to raise awareness of how our daily dietary decisions affect our carbon footprint.
                Users can pick the frequency of a certain type of food they eat. The tool will calculate the carbon emissions for each one. 
                The pie chart on the right displays the carbon emissions of each food.
                In order to help visualize our impact on the environment, we show the equivalent miles driven by a car as well as the number of trees needed to be planted to offset the total carbon emissions from our diets 

                </h2>
                <br></br>
                <h2>Research Advisors: </h2>
                <h1>Dr. Ziqian Dong </h1>
                <h1></h1>
                <h1></h1>
                <h1>Dr. Roberto Rojas-Cessa</h1>
                <br></br>
                <h2>Software Developers</h2>
                <h1>Meng Meng</h1>
                <h1>Amit Hiremath</h1>
                <h1>Elis Cucka</h1>

                <br></br>
                <h1>There is still a long way to go to hit 0 emissions by 2050. But our team here at New York Tech and NJIT believes that this tool is a step forward to help people make more informed decisions about their diet. 
                </h1>
            </div>
    
    </div>
  )
}

export default about