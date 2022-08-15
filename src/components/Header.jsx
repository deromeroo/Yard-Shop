import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/yard-sale.svg';
import cartLogo from '@icons/icon_shopping_cart.svg' 
import '@styles/Header.scss';
import { MenuMobile } from './MenuMobile';

const Header = () => {

	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMobile, setToggleMobile] = useState(false);
	const { state: {cart} } = useContext(AppContext);	
	
	return (
		<nav>
			<img src={menu} alt="menu" className="menu"  onClick={ () => setToggleMobile(!toggleMobile) }/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="logo-header" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">	
						example@example.com
					</li>

					<li className='navbar-user'
						onClick={ () => setToggle(!toggle)}
					>
						<i className="bi bi-person-circle"></i>
					</li>

					<li 
						className="navbar-shopping-cart" 
						onClick={ () => setToggleOrders(!toggleOrders)}
					>
						<img src={cartLogo}alt="shopping cart" />
						{cart.length > 0 
							? <div>{cart.length}</div>
							: null
						}
					</li>
				</ul>
			</div>

			{toggle && <Menu />}
			{toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
			{toggleMobile && <MenuMobile toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} /> }

		</nav>
	);
}

export default Header;
