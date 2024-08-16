import React from 'react';
import { Button } from "@mui/material";
import { NavLink } from 'react-router-dom';
function BorderBox(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
return(
    <div class="TextInBox">
    <h2 id="last-h2">Start your Carrer Journey With Our Thozhil Internships & Jobs</h2>
    <Button 
    component={NavLink}
    open={Boolean(buttonB1)}
    onClose={handleClickClose}
    ButtonB1={buttonB1}
    to="/login"
    onClick={handleClickClose}
    variant="outlined" 
    sx={{  
        color:"#d20000",
        borderColor: "#fff",
         '&:hover': {
            borderColor: "#8549a7",  color:"#1591ea"
            }  
        }} 
    >
      Enroll Now</Button> 
    </div>
)
}
export default BorderBox;
