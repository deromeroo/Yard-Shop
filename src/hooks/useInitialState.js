import { useState } from "react";

const initialState = {
    cart: [],
    orders: [],
    user: {}
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    //Cart

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [
                ...state.cart,
                payload
            ]
        });
    };

    const removeFromCart = (payload) => { 
        setState({
          ...state,
          cart: state.cart.filter( ( product, index ) => {
            if ( index == payload || product.id == payload ) {
              return false;
            }
            return true;
          }),
        });
      };

    const total = () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
      const sum = state.cart.reduce(reducer, 0);
      return sum;
    }

    //Orders

    const addToOrders = (payload) => {
      setState({
          ...state,
          orders: {
              ...state.orders,
              payload
          }
      });
    };

    //User
    const addToUsers = (payload) => {
      setState({
          ...state,
          user: {
              payload
          }
      });
    };


    return {
        state,
        addToCart,
        removeFromCart,
        total,
        addToOrders,
        addToUsers
    };
};

export default useInitialState;