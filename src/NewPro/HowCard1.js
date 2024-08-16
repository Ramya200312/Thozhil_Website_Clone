import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import './HowCard1.css'; 

 function HowCard1(props) {
  return (
    <>
    <Box className="custom-card1"  style={{borderRadius:40}}>
    <Card sx={{ maxWidth: 345 ,height: 560,boxShadow: 3}} >
      <CardMedia className="custom-card-media1"
        sx={{ height: 260,objectFit:'contain' }}
        image={props.image}
        title="images"
      />
      <CardContent className="custom-card-content1">
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
    </Card>   
    </Box>
    </>
  );
}
export default HowCard1;
  