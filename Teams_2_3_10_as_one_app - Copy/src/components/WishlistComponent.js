import React, { useState, useEffect } from 'react';
import ProductsService from '../services/ProductsService';

const WishlistComponent = () => {
    const [wishlistAll, setWishlistAll] = useState([])
    const getWishlistAll = () => {

        ProductsService.getAllWishlistItems().then((response) => {
            setWishlistAll(response.data)
            // console.log(response.data);
        });
    };

    useEffect(() => {
        getWishlistAll()
    }, [])

    return (
        <div>
            <h1>Wishlist Page</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Item ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlistAll.map(
                            wishlistItem =>
                                <tr>
                                    <td> {wishlistItem.itemId} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WishlistComponent;