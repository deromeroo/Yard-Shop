import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartLogo from "@icons/bt_add_to_cart.svg";
import addedToCart from "@icons/bt_added_to_cart.svg";


const ProductItem = ({product}) => {

	const {addToCart, removeFromCart, state: {cart} } = useContext(AppContext);

	const itsProductAdded = () => cart.some( (item) => item.id == product.id ) ? true : false;

	const handleCart = item => {
		itsProductAdded() ? removeFromCart(item.id) : addToCart(item)
	};

	return (
		<div className="ProductItem">
			{/* <img src={product.images[0]} alt={product.title}/> */}
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleCart(product) }>
					{ itsProductAdded() 
						? (	<img src={addedToCart} alt="" /> ) 
						: (	<img src={addToCartLogo} alt="" />)
					}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
