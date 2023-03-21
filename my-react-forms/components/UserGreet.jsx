import React from 'react';

function UserGreet() {
	const [name, setName] = React.useState('');
	// const [error, setError] = React.useState(null);

	const handleChange = (event) => {
		const userName = event.target.value;

		setName(userName);
		console.log(event.target.value);
	};

	return (
		<div>
			<form>
				<label htmlFor="name">Name: </label>
				<input
					id="name"
					placeholder="type your name"
					onChange={handleChange}
					value={name}
				></input>
			</form>
			{/* <div style={{ color: 'red' }}>{error}</div> */}
			{name ? <p>hi {name}</p> : <p>Please type in your name</p>}
		</div>
	);
}

export default UserGreet;
