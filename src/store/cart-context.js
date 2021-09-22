import React from "react";

const CartContext = React.createContext({
    // Dummy data for IDE autocompletion
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;
