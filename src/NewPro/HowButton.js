import LoginIcon from '@mui/icons-material/Login';
import {Button} from '@mui/material';

function HowButton(){
    return(
        <Button
        variant="outlined"
        startIcon={<LoginIcon />}
        sx={{
          background: 'linear-gradient(45deg, #5efce8, #736efe)',
          color: '#fff',
          borderRadius: '50px',
          '&:hover': {
            background: 'linear-gradient(45deg, #5efce8 ,#736efe)',
            color: '#000', 
          },
        }}
      >
        Enroll Now
      </Button>
    )
}
export default HowButton;