import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyApp from '../components/UsernameForm';
import ListComponent from '../components/ListComponent';
import UseStateGreeting from '../components/UseStateGreeting';

function App() {
	return (
		<div className="App">
			{/* <MyApp />
			<br />
			<ListComponent /> */}
			<UseStateGreeting initialName="Nyagah" />
		</div>
	);
}

export default App;
