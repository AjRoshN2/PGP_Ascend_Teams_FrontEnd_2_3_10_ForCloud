// Dash.js
import React, { useEffect, useState } from 'react';
import ProductsService from '../services/ProductsService';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Divider, Form, Grid, Segment, Card } from 'semantic-ui-react';
import ProductsByText from './team10/ProductsByText';
import ProductsById from './team10/ProductsById';
import axios from 'axios';

const SearchComponent = (props) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductstData = async () => {
      try {
        // Simulate authentication (replace with your actual authentication logic)
        if (!isUserAuthenticated()) {
          setError('Unauthorized access');
          return;
        }
        console.log("Category selected: " + props.productCategoryToDisplayProductsFor)
        // console.log("locl st " + localStorage.getItem('productToSearch'))
        // products = localStorage.getItem('productsToDisplay')
        // console.log("Beforeee " + localStorage.getItem('productToSearch'))
        // const productToSearchVar = localStorage.getItem('productToSearch')
        // const categorySelectedVar = props.productCategoryToDisplayProductsFor

        // console.log("jknbkjn " + productToSearchVar)
        if (localStorage.getItem('productsToDisplayFor') !== "null" && localStorage.getItem('productsToDisplayFor') !== "") {
          console.log("hiii")
          ProductsService.getProductsForSelectedCategory(props.productCategoryToDisplayProductsFor).then((response) => {
            setProducts(response.data)
            console.log("productsToDisplay - category: " + response.data);
          });
          // localStorage.setItem('productsToDisplayFor', null)
        }
        else if (localStorage.getItem('productToSearch') !== "null" && localStorage.getItem('productToSearch') !== "") {
          ProductsService.getProductsForSearchString(localStorage.getItem('productToSearch')).then((response) => {
            setProducts(response.data)
            console.log("productsToDisplay - search: " + response.data);

            // console.log("productsToDisplay: " + response.data);
          });
          // setProducts(localStorage.getItem('productToSearch'))
          // localStorage.setItem('productToSearch', null)
        }
        // localStorage.setItem('productsToDisplayFor', null)
        // localStorage.setItem('productToSearch', null)
      } catch (error) {
        setError(error.response ? error.response.data : 'An error occurred');
      }
    };

    fetchProductstData();
  }, []);

  const isUserAuthenticated = () => {
    // Add your authentication logic here
    return true; // For simulation purposes, always return true
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  const rows = [];
  for (let i = 0; i < products.length; i += 3) {
    const rowProducts = products.slice(i, i + 3);
    // console.log(rowProducts)
    rows.push(rowProducts);
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {row.map((productId, colIndex) => (
            <Col key={colIndex}>
              <ProductsById productId={productId._id} selectPage={props.selectPage} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}
export default SearchComponent;