import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@mui/material";
import './New.css';
import "./HowTop.css";
import Howitimg1 from './Asserts/static/howitimg1.jpeg';
function HowTop(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
    return(
        <>
        <div className="howcon1">
        <div>    
            <h2 id="howhead"> How it works?</h2>
            <h3 id="howspan">
            <span>"Find the perfect job or internship easily.</span>     
            <span>Apply and track your progress effortlessly."</span>
            </h3>
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
       
        <div className="image-container" id="image-container1">
            <img src={Howitimg1}  />
        </div>
        </div>
        </>
    )
}
export default HowTop;