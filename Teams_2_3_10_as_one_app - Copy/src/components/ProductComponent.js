import React, { useState, useEffect } from 'react'
// import EmployeeService from '../services/EmployeeService';
// import CategoriesAllService from '../services/CategoriesAllService';
import ProductsService from '../services/ProductsService';
import { Link } from "react-router-dom";

import "./team3/css/ProductComparison.css"

function ProductComponent(props) {

    const [products, setProducts] = useState([])
    const [categoriesAll, setCategoriesAll] = useState([])
    const [searchString, setSearchString] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getCategoriesAll()
    }, [])

    const getProducts = () => {

        ProductsService.getProducts().then((response) => {
            setProducts(response.data)
            // console.log(response.data);
        });
    };

    const getCategoriesAll = () => {

        ProductsService.getCategoriesAll().then((response) => {
            setCategoriesAll(response.data)
            // console.log(response.data);
        });
    };

    const getProductsForSelectedCategory = (event) => {

        if (event.target.value === 'select') {
            ProductsService.getProducts().then((response) => {
                setProducts(response.data)
                // console.log(response.data);
            });
        }
        else {
            ProductsService.getProductsForSelectedCategory(event.target.value).then((response) => {
                setProducts(response.data)
                // console.log(response.data);
            });
        }
    };

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchString === '') {
            ProductsService.getProducts().then((response) => {
                setProducts(response.data)
                // console.log(response.data);
            });
        }
        else {
            ProductsService.getProductsForSearchString(searchString).then((response) => {
                setProducts(response.data)
                // console.log(response.data);
            });
        }
    }

    const handleAddtoWishlist = (event) => {
        console.log(event.target.value);
    }


    const handleAddtoCart = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="container">
            <h1 className="text-center"> Wal-E-Cart</h1>
            <label>Select category: </label>
            <div>
                <select id='categorySelect' onChange={getProductsForSelectedCategory}>
                    <option value='select'>-- Select --</option>
                    {
                        categoriesAll.map(
                            categoryEach =>
                                <option value={categoryEach.category}>{categoryEach.category}</option>
                        )
                    }
                </select>

                <form onSubmit={handleSubmit}>
                    <input type='text' id='searchBarInput' value={searchString} onChange={handleSearchStringChange} />
                    <button id='searchButton' type='submit' >Search</button>
                </form>
                
                <Link to='/wishList'>Wishlist</Link>
                <br/>
                <Link to='/cart'>Cart</Link>

            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Title</th>
                        <th> Image </th>
                        <th> Availability Status</th>
                        <th> Model</th>
                        <th> Brand</th>
                        <th> Specifications</th>
                        <th> Rating</th>
                        <th> Number of Reviews</th>
                        <th> Add to Wishlist</th>
                        <th> Add to Cart</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map(
                            product =>
                                <tr>
                                    <td> {product.id} </td>
                                    <td><Link onClick={()=>{props.selectPage(product._id)}}> {product.productName}</Link></td>
                                    <td className="hoverClass" onClick={()=>{props.selectPage(product._id)}} key={'td'+product._id} > <img src={product.imageUrls[0]} /></td>
                                    <td> {product.inventryStatus}</td>
                                    <td> {product.model}</td>
                                    <td> {product.brand}</td>
                                    <td> {product.specification}</td>
                                    <td> {product.ratings.averageRatings}</td>
                                    <td> {product.ratings.numberOfReviews}</td>
                                    <td> <button id='addToWishlistButton' type='submit' value={product.id} onClick={handleAddtoWishlist}>Add to Wishlist</button> </td>
                                    <td> <button id='addToCartButton' type='submit' value={product.id} onClick={handleAddtoCart}>Add to Cart</button> </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductComponent
