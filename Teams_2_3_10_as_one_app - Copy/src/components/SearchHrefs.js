// Dash.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';
import Wishlist from './team10/Wishlist';
import { Button, Container, Divider, Form, Grid, Segment, Card } from 'semantic-ui-react';
import ProductsByText from './team10/ProductsByText';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import EmployeeService from '../services/EmployeeService';
// import CategoriesAllService from '../services/CategoriesAllService';
import ProductsService from '../services/ProductsService';
import { Link } from "react-router-dom";

import ProductDetails from './team3/ProductDetails';
import SearchComponent from './SearchComponent';

const SearchHrefs = (props) => {
 
  return (   
    
      <SearchComponent productsToDisplayFor={props.productsToDisplayFor} selectPage={props.selectPage} />
  );
}
export default SearchHrefs;