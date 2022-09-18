import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';
import AppContext from '../context/AppContext';

const Orders = () => {

	const {state, state:{cart}} = useContext(AppContext);

	console.log(state);

	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
						{cart.map( (product, index) => 
							<OrderItem product={product} key={`orderItem-${index}`} indexValue={index} />
						)}	
				</div>
			</div>
		</div>
	);
}

export default Orders;
