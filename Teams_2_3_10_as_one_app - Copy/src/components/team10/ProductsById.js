import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';

function ProductsById(props) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // console.log("Product ID: " + props.productId)
    axios.get(`/api/products/getByID/${props.productId}`)
      .then((response) => {
        setProductData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [props.productId]);

  if (!productData) {
    return <div>Loading product data...</div>;
  }

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ width: '23rem', height: '100%' }}>
            <Card.Img
              variant="top"
              src={productData.imageUrls[0]}
              style={{ objectFit: 'cover', height: '200px', width: '100%' }} // Adjust height and width values
            />
            <Card.Body>
              <Card.Title>{productData.productName}</Card.Title>
              <Card.Text>{productData.shortDescription}</Card.Text>
              <Card.Footer><center><Button
                variant="dark"
                onClick={() => { props.selectPage(productData.id) }}
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

export default ProductsById;
