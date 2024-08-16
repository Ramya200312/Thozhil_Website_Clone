import React from 'react';
import { Button } from "@mui/material";
import Topimg1 from './Asserts/static/Topimg1.jpg';
import { NavLink } from 'react-router-dom';

function Top(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
   
    return(
        <>
        <div className="con1">
        <div className="head">    
            <h2>
            <span>"Fueling Your Journey:</span>
            <span>Internships Ignite, Jobs</span>
            <span>Propel-Your Trailblazing</span>
            <span>Odyssey Begins Here!"</span>
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
       
        <div className="image-container">
            <img src={Topimg1}  />
        </div>
        </div>
        </>
    )
}
export default Top;