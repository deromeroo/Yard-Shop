import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

	const {state:{cart}, total, addToOrders} = useContext(AppContext);
	const navigate = useNavigate()

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{cart.length} articles</span>
							{/* <span>03.25.21</span> */}
						</p>
						<p>{total()}</p>
					</div>
						{cart.map( (product, index) => 
							<OrderItem product={product} key={`orderItem-${index}`} indexValue={index} />
						)}	
				</div>
				
				<div className='buttons'>
					<button
						type='button'
						className='secondary-button'
						onClick={() => navigate('/')}
					>
						Cancel
					</button>
					<button
						type='button'
						className='primary-button'
						onClick={() => (
							navigate('/orders'),
							addToOrders(cart)
						)}
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
