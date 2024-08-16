import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@mui/material";
import './InternTop.css';
import internimg1 from './Asserts/static/internimg1.jpg';
function InternTop(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
    return(
        <>
        <div className="interncon1">
        <div className="internhead">    
            <h2>
            <span>"Always remember, your</span>
            <span>focus determines your</span>
            <span>reality.”</span>
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
       
        <div className="image-container" id="image-container4">
            <img src={internimg1}  />
        </div>
        </div>
        </>
    )
}
export default InternTop;