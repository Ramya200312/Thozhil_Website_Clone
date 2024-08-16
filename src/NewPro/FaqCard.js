import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function FaqCard(props) {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <Card 
      sx={{ 
        width: 900, 
        cursor: 'pointer', 
        margin: '20px auto', 
        border: '2px solid #000', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
      }} 
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.heading}
        </Typography>
        {isContentVisible && (
          <div style={{ backgroundColor: 'aquamarine', padding: '10px', marginTop: '10px' }}>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FaqCard;
