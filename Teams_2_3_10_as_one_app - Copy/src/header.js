import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProductsService from './services/ProductsService';

export const PageHeader = () => {
  // State to capture the search value
  const [searchValue, setSearchValue] = useState(null);
  const [products, setProducts] = useState([])
  const [productToSearch, setProductToSearch] = useState([])
  // localStorage.setItem('productsToDisplayFor', null);
  // localStorage.setItem('productToSearch', null);

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    // setSearchValue(e.target.value);
    setProductToSearch(e.target.value)
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    localStorage.setItem('productToSearch', productToSearch)
    localStorage.setItem('productsToDisplayFor',null)
    console.log("Product to search: " + productToSearch)
  }

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href=' ' onClick={() => {
            localStorage.setItem('productsToDisplayFor', null);
            localStorage.setItem('productToSearch', null);
            window.location.reload(false)
          }} >WalECart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">

            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="searchValue"
                onChange={handleSearchChange}
              />
              <Button variant="info" type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
};
