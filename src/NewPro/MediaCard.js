import * as React from 'react';
import './New.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FormControl} from '@mui/material';

 function MediaCard(props) {
  return (
    <FormControl >
    <Card sx={{ maxWidth: 345 ,height: 420,  borderTopRightRadius: 50,boxShadow: 3,marginTop:15,marginBottom:15}} className='Card1'>
      <CardMedia
        sx={{ height: 260,objectFit:'contain' }}
        image={props.image}
        title="images"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
    </Card>   
</FormControl>
  );
}
export default MediaCard;
  