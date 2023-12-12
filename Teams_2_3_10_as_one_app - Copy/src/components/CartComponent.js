import React, { useState, useEffect } from 'react';
import ProductsService from '../services/ProductsService';

const CartComponent = () => {
    const [cartAll, setCartAll] = useState([])
    const getCartAll = () => {

        ProductsService.getAllCartItems().then((response) => {
            setCartAll(response.data)
            // console.log(response.data);
        });
    };

    useEffect(() => {
        getCartAll()
    }, [])

    return (
        <div>
            <h1>Cart Page</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Item ID</th>
                        <th> Quantity</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        cartAll.map(
                            cartItem =>
                                <tr>
                                    <td> {cartItem.itemId} </td>
                                    <td> {cartItem.quantity} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CartComponent;