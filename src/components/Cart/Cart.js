import React from 'react';

const Cart = (props) => {
    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const product = props.cart[i];
        total = total + product.price;
    }
    return (
        <div>
            <p>This is Cart</p>
            <p><small>Order Items: {props.cart.length}</small></p>
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;