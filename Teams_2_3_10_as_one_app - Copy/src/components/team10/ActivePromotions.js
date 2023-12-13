import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Grid from '@mui/material/Grid';
import moment from 'moment';

function ActivePromotions() {
  const [promoData, setPromoData] = useState([]);
  const [copyMessages, setCopyMessages] = useState({});

  useEffect(() => {
    axios.get("http://172.203.170.91:9400/promotion/getActivePromotions")
      .then((response) => {
        setPromoData(response.data.data);
      });
  }, []);

  // Function to generate a random light color
  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 50; // Adjust saturation to control color intensity
    const lightness = Math.floor(Math.random() * 30) + 80; // Ensure higher lightness values for light colors
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Function to handle copying promo code to clipboard
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log('Promo code copied to clipboard:', code);
        setCopyMessages((prevMessages) => ({
          ...prevMessages,
          [code]: 'Promo code copied to clipboard!',
        }));
        // Clear the message after a few seconds (adjust the timeout as needed)
        setTimeout(() => {
          setCopyMessages((prevMessages) => ({
            ...prevMessages,
            [code]: null,
          }));
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to copy promo code to clipboard:', error);
        setCopyMessages((prevMessages) => ({
          ...prevMessages,
          [code]: 'Failed to copy promo code. Please try again.',
        }));
        // Clear the message after a few seconds (adjust the timeout as needed)
        setTimeout(() => {
          setCopyMessages((prevMessages) => ({
            ...prevMessages,
            [code]: null,
          }));
        }, 3000);
      });
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {promoData.map((data) => (
          <React.Fragment key={data.promoCode}>
            <Grid item md={3}>
              <Card style={{ width: '18rem', backgroundColor: getRandomLightColor() }}>
                <Card.Body>
                  <Card.Title>{data.promoCode}</Card.Title>
                  <Card.Text>Upto {data.promoPercentage} % off</Card.Text>
                  <Card.Footer>
                    Offer valid from {moment(data.createdDate).format('MMM D, YYYY')} to {moment(data.endDate).format('MMM D, YYYY')}
                  </Card.Footer>
                  <Button variant="primary" onClick={() => handleCopyCode(data.promoCode)}>Copy code</Button>
                  {copyMessages[data.promoCode] && <div style={{ color: 'green' }}>{copyMessages[data.promoCode]}</div>}
                </Card.Body>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default ActivePromotions;
