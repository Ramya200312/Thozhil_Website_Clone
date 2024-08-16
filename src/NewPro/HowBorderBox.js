import { Button } from "@mui/material";
import './New.css';

function HowBorderBox(){
return(
    <div class="TextInBox">
    <h2 id="last-h2">Begin Your Career Adventure - Exciting Internships & Jobs Await at Thozhil.</h2>
    <Button variant="outlined" sx={{  
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
export default HowBorderBox;