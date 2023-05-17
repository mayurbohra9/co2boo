
//import home from './home.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap'
import renderSwitch, {
	renderSwitchApple, renderSwitchAvocado, renderSwitchBanana, renderSwitchBeans, renderSwitchBeef, renderSwitchBeer
	, renderSwitchBerriesAndGrapes, renderSwitchBread, renderSwitchCheese, renderSwitchChicken, renderSwitchChocolateDark, renderSwitchChocolateMilk
	, renderSwitchCitrus, renderSwitchCoffee, renderSwitchEggs, renderSwitchFishFarmed, renderSwitchLamb, renderSwitchMilkAlmond, renderSwitchMilkDairy
	, renderSwitchMilkOat, renderSwitchMilkRice, renderSwitchMilkSoy, renderSwitchNuts, renderSwitchOatmeal, renderSwitchPasta, renderSwitchPeas,
	renderSwitchPork, renderSwitchPotatoes, renderSwitchPrawnsFarmed, renderSwitchRice, renderSwitchTea, renderSwitchTofu, renderSwitchTomatoes,
	renderSwitchWine
} from "./renderSwitch";

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart } from 'react-minimal-pie-chart';
////////////////////////////////////////////////////

function Home() {

  const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const [value5, setValue5] = useState("");
	const [value6, setValue6] = useState("");
	const [value7, setValue7] = useState("");
	const [value8, setValue8] = useState("");
	const [value9, setValue9] = useState("");
	const [value10, setValue10] = useState("");
	const [value11, setValue11] = useState("");
	const [value12, setValue12] = useState("");
	const [value13, setValue13] = useState("");
	const [value14, setValue14] = useState("");
	const [value15, setValue15] = useState("");
	const [value16, setValue16] = useState("");

  function handleData(e) {
		e.preventDefault()
	}

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
	}

  function calculateTotal() {
		return renderSwitchChicken(value1) + renderSwitchBeef(value2) + renderSwitchFishFarmed(value3) + renderSwitchLamb(value4) +
			renderSwitchBanana(value5) + renderSwitchApple(value6) + renderSwitchAvocado(value7) + renderSwitchBerriesAndGrapes(value8) +
			renderSwitchTomatoes(value9) + renderSwitchPotatoes(value10) + renderSwitchNuts(value11) + renderSwitchOatmeal(value12) +
			renderSwitchCitrus(value13) + renderSwitchRice(value14) + renderSwitchBeans(value15) + renderSwitchBread(value16)
	}

  return (
    <div>
     
      <h1 style={{ fontSize: 30, color: "" }}>
				Carbon Footprint Calculator
				<br />
			</h1>

      NOTE: The website is still in progress. This is just a demonstration and some calculations need to be updated soon.
				<br /> <br />

      
        <Container>
					<Row>



						<Col>


							Amount next to the name of the food is how much/many you consume per serving. Vegetables/fruits are average size. Select the frequency for which you consume each product. Amount of CO2 emitted in one year will be shown.
							<br />
							<br />
							<form onSubmit={handleData}>
								<h1 style={{ fontSize: 22, color: "brown" }}>
									Meat Products

								</h1>



								<Row>

									<Col>

										Chicken (75g) {showOptions(value1, (e) => setValue1(e.target.value))}
										{renderSwitchChicken(value1)} kg of CO2 emitted.


										<br />

									</Col>

									<Col>
										Beef (75g) {showOptions(value2, (e) => setValue2(e.target.value))}
										{renderSwitchBeef(value2)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Fish (140g) {showOptions(value3, (e) => setValue3(e.target.value))}
										{renderSwitchFishFarmed(value3)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Lamb (75g) {showOptions(value4, (e) => setValue4(e.target.value))}
										{renderSwitchLamb(value4)} kg of CO2 emitted.
										<br />
									</Col>


								</Row>


								<br />
								<h1 style={{ fontSize: 22, color: "green" }}>
									Fruits
								</h1>
								<Row>

									<Col>

										Banana (1) {showOptions(value5, (e) => setValue5(e.target.value))}
										{renderSwitchBanana(value5)} kg of CO2 emitted.
										<br />

									</Col>

									<Col>

										Apples (1) {showOptions(value6, (e) => setValue6(e.target.value))}
										{renderSwitchApple(value6)} kg of CO2 emitted.
										<br />
									</Col>
									<Col>

										Avocado (1) {showOptions(value7, (e) => setValue7(e.target.value))}
										{renderSwitchAvocado(value7)} kg of CO2 emitted.
										<br />

									</Col>
									<Col>

										Grapes (75g) {showOptions(value8, (e) => setValue8(e.target.value))}
										{renderSwitchBerriesAndGrapes(value8)} kg of CO2 emitted.
										<br />
									</Col>
								</Row>

								<br />
								<h1 style={{ fontSize: 22, color: "orange" }}>
									Vegetables

								</h1>
								<Row>

									<Col>

										Tomato (1) {showOptions(value9, (e) => setValue9(e.target.value))}
										{renderSwitchTomatoes(value9)} kg of CO2 emitted.
										<br />

									</Col>

									<Col>

										Potato (1) {showOptions(value10, (e) => setValue10(e.target.value))}
										{renderSwitchPotatoes(value10)} kg of CO2 emitted.
										<br />
									</Col>
									<Col>

										Pepper (1) {showOptions(value11, (e) => setValue11(e.target.value))}
										{renderSwitchNuts(value11)} kg of CO2 emitted.
										<br />

									</Col>
									<Col>

										Onions (1) {showOptions(value12, (e) => setValue12(e.target.value))}
										{renderSwitchOatmeal(value12)} kg of CO2 emitted.
										<br />
									</Col>
								</Row>

								<br />
								<h1 style={{ fontSize: 22, color: "brown" }}>
									Grain Products (45g)

								</h1>



								<Row>

									<Col>

										Wheat flour{showOptions(value13, (e) => setValue13(e.target.value))}
										{renderSwitchCitrus(value13)} kg of CO2 emitted.


										<br />

									</Col>
									<Col>

										Rice {showOptions(value14, (e) => setValue14(e.target.value))}
										{renderSwitchRice(value14)} kg of CO2 emitted.
										<br />

									</Col>


									<Col>

										Rye Flour  {showOptions(value15, (e) => setValue15(e.target.value))}
										{renderSwitchBeans(value15)} kg of CO2 emitted.
										<br />

									</Col>

									<Col>

										Corn {showOptions(value16, (e) => setValue16(e.target.value))}
										{renderSwitchBread(value16)} kg of CO2 emitted.
										<br />

									</Col>


								</Row>


								<br />

								This data was based mainly on the BBC Carbon Footprint Emission values.
								<br />
								<Button type="submit" style={{
									font: 'inherit', cursor: 'pointer',
									border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem'
								}}>Submit this information to our database</Button>




								<br /><br />
								<br /><br />
								<h1 style={{ fontSize: 29, color: "" }}>
									The total amount of CO2 will be &nbsp; {calculateTotal()}
									&nbsp; kg of CO2 in one year.
								</h1>



								<br /><br />
								

								<br />
								Calculation is based on information provided by United States Environmental | Protection Agency.
								<br />

							</form>
							<br />
							<br />

							<br /><br />

							

							<br /><br />




							<br /> <br />




							<br /> <br />



							<br /> <br />







						</Col>


						<Col>

							Hold your cursor on each pie slice to check the CO2 emition percentage of each product.
							<br />

							<br />
							<div>
								<PieChart
									data={[
										{
											title: 'Chicken ' + Math.round(renderSwitchChicken(value1) / (calculateTotal()) * 100) + '%', value: renderSwitchChicken(value1), color: '#f0f8ff'
										},
										{
											title: 'Beef ' + Math.round(renderSwitchBeef(value2) / (calculateTotal()) * 100) + '%', value: renderSwitchBeef(value2), color: '#E38627'
										},

										{
											title: 'Fish ' + Math.round(renderSwitchFishFarmed(value3) / (calculateTotal()) * 100) + '%', value: renderSwitchFishFarmed(value3), color: '#faebd7'
										},

										{
											title: 'Lamb ' + Math.round(renderSwitchLamb(value4) / (calculateTotal()) * 100) + '%', value: renderSwitchLamb(value4), color: '#a52a2a'
										},



										{
											title: 'Banana ' + Math.round(renderSwitchBanana(value5) / (calculateTotal()) * 100) + '%', value: renderSwitchBanana(value5), color: '#194d33'
										},

										{
											title: 'Apple ' + Math.round(renderSwitchApple(value6) / (calculateTotal()) * 100) + '%', value: renderSwitchApple(value6), color: '#7fffd4'
										},

										{
											title: 'Avocado ' + Math.round(renderSwitchAvocado(value7) / (calculateTotal()) * 100) + '%', value: renderSwitchAvocado(value7), color: '#008b8b'
										},

										{
											title: 'Grapes ' + Math.round(renderSwitchBerriesAndGrapes(value8) / (calculateTotal()) * 100) + '%', value: renderSwitchBerriesAndGrapes(value8), color: '#8a2be2'
										},



										{
											title: 'Tomatoes ' + Math.round(renderSwitchTomatoes(value9) / (calculateTotal()) * 100) + '%', value: renderSwitchTomatoes(value9), color: '#dc143c'
										},
										{
											title: 'Potatoes ' + Math.round(renderSwitchPotatoes(value10) / (calculateTotal()) * 100) + '%', value: renderSwitchPotatoes(value10), color: '#663d3d'
										},
										{
											title: 'Peppers ' + Math.round(renderSwitchNuts(value11) / (calculateTotal()) * 100) + '%', value: renderSwitchNuts(value11), color: '#006400'
										},
										{
											title: 'Onions ' + Math.round(renderSwitchOatmeal(value12) / (calculateTotal()) * 100) + '%', value: renderSwitchOatmeal(value12), color: '#00ffff'
										},



										{
											title: 'Wheat Flour ' + Math.round(renderSwitchCitrus(value13) / (calculateTotal()) * 100) + '%', value: renderSwitchCitrus(value13), color: '#f5deb3'
										},
										{
											title: 'Rice ' + Math.round(renderSwitchRice(value14) / (calculateTotal()) * 100) + '%', value: renderSwitchRice(value14), color: '#39666b'
										},
										{
											title: 'Rye Flour ' + Math.round(renderSwitchBeans(value15) / (calculateTotal()) * 100) + '%', value: renderSwitchBeans(value15), color: '#40e0d0'
										},
										{
											title: 'Corn ' + Math.round(renderSwitchBread(value16) / (calculateTotal()) * 100) + '%', value: renderSwitchBread(value16), color: '#f5f5f5'
										}



									]}
								/>
							</div>
						</Col>
					</Row>

				</Container>


    </div>
    
    
  )
}

export default Home