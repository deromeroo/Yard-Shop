import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = ({setToggleOrders}) => {

	const {state: {cart}} = useContext(AppContext);

	const total = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img 
					src={flechita} 
					alt="arrow" 
					onClick={() => setToggleOrders(false) }
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map( (product, index) => 
					<OrderItem product={product} key={`orderItem-${index}`} indexValue={index} />
				)}				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${total()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
