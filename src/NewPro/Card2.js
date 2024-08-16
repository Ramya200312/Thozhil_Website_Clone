import * as React from 'react';
import './New.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl} from '@mui/material';


 function Card2(props) {
  return (
    <FormControl >
    <Card sx={{ maxWidth: 300 ,height: 300 ,borderRadius: 10 ,  lineHeight: 2.5 ,fontSize: 60,marginTop:10}} className='card2-content'>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="card2-title">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="card2-description">
        {props.description}
        </Typography>
      </CardContent>
    </Card>
</FormControl>
  );
}
export default Card2;