import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';
function ProductsByText( props ) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // console.log('Fetching data for text:', props.text);
    axios.get(`http://172.203.226.233:8765/api/products/getByText/${props.text}`)
      .then((response) => {
        // console.log('API response:', response.data);
        setProductData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [props.text]);

  if (!Array.isArray(productData) || productData.length === 0) {
    console.log('No products found for the given search text:', props.text);
    return <div>No products found for the given search text...</div>;
  }

  // console.log('Products:', productData);

  // Display only the first product
  const firstProduct = productData[0];

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ width: '23rem', height: '100%' }}>
            <Card.Img 
              variant="top" 
              src={firstProduct.imageUrls[0]} 
              style={{ objectFit: 'cover', height: '200px', width: '100%' }}
            />
            <Card.Body>
              <Card.Title>{firstProduct.productName}</Card.Title>
              <Card.Text>{firstProduct.shortDescription}</Card.Text>
              <Card.Footer><center><Button
                variant="dark"
                onClick={()=>{props.selectPage(firstProduct.id)}}             
              >
                Product details
              </Button></center></Card.Footer>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductsByText;
