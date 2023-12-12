import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsById from './ProductsById';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Wishlist = (props) => {
  const [wishlistData, setWishlistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        // Simulate authentication (replace with your actual authentication logic)
        if (!isUserAuthenticated()) {
          setError('Unauthorized access');
          return;
        }

        const response = await axios.get(`http://172.203.226.233:8765/userdashboard/api/user/wishlist/${props.userEmail}`);
        setWishlistData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : 'An error occurred');
      }
    };

    fetchWishlistData();
  }, [props.userEmail]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!wishlistData) {
    return <div>Loading...</div>;
  }

 

  // Group the wishlistData into rows of three products each
  const rows = [];
  for (let i = 0; i < wishlistData.length; i += 3) {
    const rowProducts = wishlistData.slice(i, i + 3);
    rows.push(rowProducts);
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {row.map((productId, colIndex) => (
            <Col key={colIndex}>
              <ProductsById productId={productId} selectPage={props.selectPage} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

// Simulate authentication logic (replace with your actual authentication logic)
const isUserAuthenticated = () => {
  // Add your authentication logic here
  return true; // For simulation purposes, always return true
};

export default Wishlist;
