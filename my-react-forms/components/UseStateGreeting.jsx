import React, { useEffect } from 'react';

function useLocalstorageState(key, defaultValue = '') {
	const [state, setState] = React.useState(
		() => window.localStorage.getItem(key) || defaultValue
	);
	React.useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [key, state]);

	return [state, setState];
}

function UseStateGreeting({ initialName = ' ' }) {
	const [greeting, setGreeting] = useLocalstorageState('name', initialName);

	const handleChange = (e) => {
		setGreeting(e.target.value);
	};

	return (
		<div>
			<label htmlFor="name">Name: </label>
			<input id="name" onChange={handleChange} type="text" />
			{greeting ? <p>Hello {greeting}</p> : <p>Please type your name</p>}
		</div>
	);
}

export default UseStateGreeting;
