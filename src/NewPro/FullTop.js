import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@mui/material";
import fulltimeimg1 from './Asserts/static/fulltimeimg1.jpg';
import './FullTop.css';
function FullTop(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
    return(
        <>
        <div className="fullcon1">
        <div className="fullhead">    
            <h2>
            <span>Unlock Your Potential</span>
            <span>Select Your Dream</span>
            <span>Job Here!</span>
            </h2>
            <Button 
            component={NavLink}
            open={Boolean(buttonB1)}
            onClose={handleClickClose}
            ButtonB1={buttonB1}
            to="/login"
            onClick={handleClickClose}
            variant="contained" 
            sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '50px'}}   >Enroll Now</Button> 
        </div>
       
        <div className="image-container" id="image-container3">
            <img src={fulltimeimg1}  />
        </div>
        </div>
        </>
    )
}
export default FullTop;