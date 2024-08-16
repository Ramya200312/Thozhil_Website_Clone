import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import './HoverCard.css';

const CustomCard = ({ image, heading1, heading2,content }) => {
  return (
    <Box className="custom-card"  style={{borderRadius:40,marginBottom:20,marginTop:20}}>
      <Card  >
        <CardMedia
          className="custom-card-media"
          component="img"
          image={image}
          alt={heading1}
          alt1={heading2}

        />
        <CardContent className="custom-card-content">
          <Typography gutterBottom variant="h5" component="div">
            {heading1}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {heading2}
          </Typography>
        </CardContent>
        <Box className="hover-content">
          <Typography variant="body2">
            {content}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default CustomCard;
