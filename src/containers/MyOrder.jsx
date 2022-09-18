import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import { useNavigate } from 'react-router-dom';

const MyOrder = ({setToggleOrders}) => {

	const {state: {cart}, total} = useContext(AppContext);

	const navigate = useNavigate();

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
				<button
					type='button' 
					className="primary-button"
					onClick={() => (navigate('/checkout') , setToggleOrders(false) )}
				>
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
