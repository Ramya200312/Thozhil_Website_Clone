import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import loginimg1 from './Asserts/static/loginimg1.png';

function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ position: 'relative', maxWidth: 600, margin: 'auto', mt: 4, mb: 50, marginTop: 30 }}>
            {/* Card Behind (Left Side) */}
            <Card
                sx={{
                    position: 'absolute',
                    left: '-120px',
                    width: '550px',
                    height: '550px',
                    borderRadius: '8px',
                    backgroundColor: '#f5f5f5',
                    boxShadow: 3,
                    zIndex: 1,
                    overflow: 'hidden', 
                    display: 'flex', 
                }}
            >
                <Box
                    sx={{
                        width: '400px', 
                        height: '100%',
                        display: 'flex', 
                        justifyContent: 'flex-start', 
                        alignItems: 'center',
                        overflow: 'hidden',
                        clipPath: 'circle(50% at 50% 50%)', 
                    }}
                >
                    <CardMedia
                        component="img" 
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        image={loginimg1}
                        title="login image"
                    />
                </Box>
            </Card>
            {/* Card in Front (Right Side) */}
            <Card
                sx={{
                    position: 'relative',
                    marginLeft: '150px',
                    top: '90px',
                    left: '200px',
                    width: '350px',
                    borderRadius: 2,
                    boxShadow: 5,
                    zIndex: 2,
                }}
            >
                <CardContent sx={{ bgcolor: '#f5f5f5' }}>
                    <Box sx={{ padding: '20px',textAlign:"center" }}>
                        <h3>Login</h3>

                        <Box sx={{ bgcolor: '#fff', padding: '10px', borderRadius: '4px' }}>
                            <TextField
                                placeholder='Email'
                                id="input-with-icon-textfield"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountBoxOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />
                        </Box>

                        <Box sx={{ bgcolor: '#fff', padding: '10px', borderRadius: '4px', mt: 2 }}>
                            <TextField
                                placeholder='Password'
                                id="input-with-icon-textfield"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <HttpsOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: '#B2BEB5',
                                textAlign: 'right',
                                cursor: 'pointer',
                                mt: 1,
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: '#1591ea',
                                },
                            }}
                        >
                            Forgot Password?
                        </Typography>

                        <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                            Login
                        </Button>

                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'black',
                                mt: 2,
                            }}
                        >
                            Don’t have an account?{' '}
                            <span style={{ color: '#1591ea', cursor: 'pointer' }}>
                                Register
                            </span>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default LoginForm;
