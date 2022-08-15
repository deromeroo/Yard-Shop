import React, { useRef } from 'react';
import '@styles/Login.scss';

import login from "@logos/login.svg"

const Login = () => {

	const form = useRef(null);

	const handleSubmit = (e) => {

		e.preventDefault();

		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}

		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={login} alt="Login" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="example@example.com" className="input input-email" required />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" required />
					<button 
						className="primary-button login-button"
						onClick={handleSubmit}
					>
						Log In
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
