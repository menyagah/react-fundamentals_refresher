import React from 'react';

function useLocalStorageState(key, defaultValue = '') {
	const [state, setState] = React.useState(
		() => window.localStorage.getItem(key) || defaultValue
	);

	React.useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [key, state]);
	return [state, setState];
}

function UserGreet2({ initialName = '' }) {
	const [name, setName] = useLocalStorageState('name', initialName);
	function handleChange(event) {
		const userName = event.target.value;
		setName(userName);
	}

	return (
		<div>
			<div>
				<form>
					<label htmlFor="name">Name: </label>
					<input onChange={handleChange} id="name" value={name} />
				</form>
				{name ? <strong>hello {name}</strong> : 'Please type your name'}
			</div>
		</div>
	);
}

export default UserGreet2;
