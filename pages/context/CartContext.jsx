import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<CartContext.Provider value={{ click, handleClick }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
export { CartProvider };
