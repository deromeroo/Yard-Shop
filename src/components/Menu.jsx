import React from 'react';
import '@styles/Menu.scss';
import { useNavigate } from 'react-router-dom';

const Menu = ({setToggle}) => {

	const navigate = useNavigate();

	return (
		<div className="Menu">
			<ul>
				<li>
					<p 
						className="title"
						onClick={() => (
							setToggle(false),
							navigate('/orders')
						)}
					>
						My orders
					</p>
				</li>
				<li>
					<p 
						onClick={() => (
							setToggle(false),
							navigate('/account')
						)}
					>My account</p>
				</li>
				<li>
					<p className="navbar-email-mobile">example@example.com</p>
					<a
						onClick={() => (
							setToggle(false),
							navigate('/login')
						)}
					>Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
