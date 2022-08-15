import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (api) => {

    const [products, setProducts] = useState([]);

	useEffect( () => {
		async function fetchData() {
			const response = await axios(api);
			setProducts(response.data);
		};

		fetchData();
	}, []);

    return products;
};

export default useGetProducts;