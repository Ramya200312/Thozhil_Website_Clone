import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@mui/material";
import faqimg1 from './Asserts/static/faqimg1.jpg';
import './FaqTop.css';
function FaqTop(){
    const [buttonB1,setButtonB1] = React.useState(null);

    const handleClick = (event) => {
        setButtonB1(event.currentTarget);
     };
     const handleClickClose = (event) => {
       setButtonB1(null);
    };
    return(
        <>
        <div className="faqcon1">
        <div className="faqhead">    
            <h1>
            <span>The Page Where All</span>
            <span>Your Queries Made!</span>
            </h1>
            <p><b>Never Assume You understand.Ask The Questions....</b></p>
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
       
        <div className="image-container" id="image-container2">
            <img src={faqimg1}  />
        </div>
        </div>
        </>
    )
}
export default FaqTop;