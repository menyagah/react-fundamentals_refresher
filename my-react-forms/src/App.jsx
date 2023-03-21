import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyApp from '../components/UsernameForm';
import ListComponent from '../components/ListComponent';
import UseStateGreeting from '../components/UseStateGreeting';
import UserGreet from '../components/UserGreet';
import UserGreet2 from '../components/UserGreet2';

function App() {
	return (
		<div className="App">
			{/* <MyApp />
			<br />
			<ListComponent /> */}
			{/* <UseStateGreeting initialName="Nyagah" /> */}
			{/* <UserGreet /> */}
			<UserGreet2 initialName="George" />
		</div>
	);
}

export default App;
