import React from 'react';
import { TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar1() {
    return (
        <>
         <center><h1>INTERNSHIP'S</h1></center>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '55%',marginLeft:63}}>
            <TextField   
                fullWidth
                placeholder="Search Anything"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button variant="contained"  sx={{borderRadius:40,backgroundColor:"#050C9C",color:"#fff"}}>
                                Search
                            </Button>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 40,
                    }
                }}
            />
        </Box>
        </>
    );
}

export default SearchBar1;
