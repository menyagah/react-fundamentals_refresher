import React from 'react';

function UsernameForm({ onSubmitUsername }) {
	const [error, setError] = React.useState(null);
	const [username, setUsername] = React.useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = username;

		onSubmitUsername(value.toLowerCase());
	};

	const handleChange = (e) => {
		const { value } = event.target;
		setUsername(value.toLowerCase());
		// setError(isLowerCase ? null : 'username must be lower case');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="input">Username:</label>
				<input
					id="input"
					type="text"
					onChange={handleChange}
					value={username}
				/>
			</div>
			<div style={{ color: 'red' }}>{error}</div>
			<button disabled={Boolean(error)} type="submit">
				Submit
			</button>
		</form>
	);
}

function MyApp() {
	const onSubmitUsername = (username) => alert(`You entered: ${username}`);
	return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}
export default MyApp;
