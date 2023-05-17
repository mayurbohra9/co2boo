
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
import logo from './logo5.png';
////////////////////////////////////////////////////
import {useStateValue} from './components/dailylogs/StateProvider';
import {auth, db} from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import Navbar from './components/navbar/Navbar';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";



function Home() {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const navigate = useNavigate();
  	const [chicken, setChicken] = useState("");
	const [beef, setBeef] = useState("");
	const [fish, setFish] = useState("");
	const [lamb, setLamb] = useState("");
	const [banana, setBanana] = useState(""); //banana
	const [apple, setApple] = useState(""); //apple
	const [value7, setValue7] = useState(""); //avocado
	const [value8, setValue8] = useState(""); //grape
	const [value9, setValue9] = useState(""); //tomato
	const [value10, setValue10] = useState(""); //potato
	const [value11, setValue11] = useState(""); //pepper
	const [value12, setValue12] = useState(""); //onion
	const [value13, setValue13] = useState(""); //wheat flour
	const [value14, setValue14] = useState(""); //rice
	const [value15, setValue15] = useState(""); //rye flour
	const [value16, setValue16] = useState(""); //corn
	const [error, setError] = useState('');
	const [chickenCO2, setChickenCO2] = useState("");
	const [userInfo, setUserInfo] = useState([]);
	
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
	function createFoodBase(uid){
		
        db.collection('users')
		.doc(user.uid)
		.collection('food info')
		.add({
            
			email:user.email,
			createdAt: new Date(),
			total: calculateTotal(),
        });
		console.log(user.uid);
    };



	const recordFood = e =>
    {
        e.preventDefault()
        setError('')
                if(auth){
                    var uid = user.uid
                    createFoodBase(uid);
                    console.log(uid)
                    navigate('/home')
                }
       
    }

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
		return renderSwitchChicken(chicken) + renderSwitchBeef(beef) + renderSwitchFishFarmed(fish) + renderSwitchLamb(lamb) +
			renderSwitchBanana(banana) + renderSwitchApple(apple) + renderSwitchAvocado(value7) + renderSwitchBerriesAndGrapes(value8) +
			renderSwitchTomatoes(value9) + renderSwitchPotatoes(value10) + renderSwitchNuts(value11) + renderSwitchOatmeal(value12) +
			renderSwitchCitrus(value13) + renderSwitchRice(value14) + renderSwitchBeans(value15) + renderSwitchBread(value16)
	}

	const [{user}, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user)
		{
			auth.signOut();
			navigate('/');
		}
	}

  return (
    <div>
      <Navbar/>
      <h1 align = "center" style={{ fontSize: 30, color: "" }}>
		  <br>
		  </br>
        <div className = "login__logo">
             <img src = {logo} />
        </div>
		<br>
		</br>
        Carbon Footprint Calculator
				<br />
			</h1>

				<br /> <br />
      <Container className='Container'>
				<Row>		
					<ul style={{
								textAlign:'center'
							}}>
						{userInfo.map(userInfo => <h1 key={userInfo}>Welcome, {userInfo.data.firstName}!</h1>)}
					</ul>
						<Col>
							<form onSubmit={handleAuthentication}>
								<h1 style={{ fontSize: 22, color: "brown" }}>
									Meat Products
								</h1>
								<Row>

									<Col>
										Chicken (75g) {showOptions(chicken, (e) => setChicken(e.target.value))}
											
										{renderSwitchChicken(chicken)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Beef (75g) {showOptions(beef, (e) => setBeef(e.target.value))}
										{renderSwitchBeef(beef)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Fish (140g) {showOptions(fish, (e) => setFish(e.target.value))}
										{renderSwitchFishFarmed(fish)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Lamb (75g) {showOptions(lamb, (e) => setLamb(e.target.value))}
										{renderSwitchLamb(lamb)} kg of CO2 emitted.
										<br />
									</Col>
								</Row>


								<br />
								<h1 style={{ fontSize: 22, color: "green" }}>
									Fruits
								</h1>
								<Row>

									<Col>
										Banana (1) {showOptions(banana, (e) => setBanana(e.target.value))}
										{renderSwitchBanana(banana)} kg of CO2 emitted.
										<br />
									</Col>

									<Col>
										Apples (1) {showOptions(apple, (e) => setApple(e.target.value))}
										{renderSwitchApple(apple)} kg of CO2 emitted.
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
								
								<br />
								<Button onClick={recordFood} type="submit" style={{
									font: 'inherit', cursor: 'pointer',
									border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem', marginLeft:'75px'
								}}>Submit </Button>

								<br /><br />
								<h5 style={{ fontSize: 20, textAlign:'center' }}>
									The total amount of CO2 will be &nbsp; {calculateTotal()}
									&nbsp; kg of CO2 in one year.
								</h5>

								<br />
							
								<Button  type="submit" style={{
									font: 'inherit', cursor: 'pointer',
									border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem', marginLeft:'75px'
								}}>Sign out </Button>
							</form>
							

							<br /><br />
							
						</Col>


						<Col>
							<p 
							style={{
								textAlign:'center'
							}}>
							Pie will show as soon as you make selections. Hold your cursor on each pie slice to check the CO2 emition percentage of each product.
							</p>
							<br />
							<br />
							<div>
								<PieChart
									data={[
										{
											title: 'Chicken ' + Math.round(renderSwitchChicken(chicken) / (calculateTotal()) * 100) + '%', value: renderSwitchChicken(chicken), color: '#f0f8ff'
										},
										{
											title: 'Beef ' + Math.round(renderSwitchBeef(beef) / (calculateTotal()) * 100) + '%', value: renderSwitchBeef(beef), color: '#E38627'
										},

										{
											title: 'Fish ' + Math.round(renderSwitchFishFarmed(fish) / (calculateTotal()) * 100) + '%', value: renderSwitchFishFarmed(fish), color: '#faebd7'
										},

										{
											title: 'Lamb ' + Math.round(renderSwitchLamb(lamb) / (calculateTotal()) * 100) + '%', value: renderSwitchLamb(lamb), color: '#a52a2a'
										},
										{
											title: 'Banana ' + Math.round(renderSwitchBanana(banana) / (calculateTotal()) * 100) + '%', value: renderSwitchBanana(banana), color: '#194d33'
										},

										{
											title: 'Apple ' + Math.round(renderSwitchApple(apple) / (calculateTotal()) * 100) + '%', value: renderSwitchApple(apple), color: '#7fffd4'
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