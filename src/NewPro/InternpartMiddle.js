import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CardContent, CardActions, Typography, Box } from '@mui/material';

function InternpartMiddle({ data2 }) {
    const [selectedOption5, setSelectedOption5] = React.useState('');
    const handleChange5 = (event) => {
        setSelectedOption5(event.target.value);
    };

    const [selectedOption6, setSelectedOption6] = React.useState('');
    const handleChange6 = (event) => {
        setSelectedOption6(event.target.value);
    };

    const [currentPage2, setCurrentPage2] = React.useState(1);
    const itemsPerPage = 4; 

    const totalPages = Math.ceil(data2.length / itemsPerPage);

    const handlePageChange2 = (page) => {
        setCurrentPage2(page);
    };

    const renderFormCard2 = () => (
        <Grid item xs={12} md={12} key="form-card">
            <FormControl fullWidth>
                <Card variant='outlined' sx={{ maxWidth: 300, height: 750, boxShadow: 3, justifyContent: "center", marginBottom: 20, marginLeft: 15 }}>
                    <CardContent sx={{ marginLeft: 2 }}>
                        <center><h1>Filters</h1></center>
                        <h3>Job Role</h3>
                        <TextField placeholder='(eg.,Software Engineer)' sx={{ border: '2px solid #000' }} fullWidth />
                        <h3>Skill</h3>
                        <TextField placeholder='(eg.,Java,Python,Html)' sx={{ border: '2px solid #000' }} fullWidth />
                        <h3>Location</h3>
                        <TextField placeholder='(eg.,Chennai)' sx={{ border: '2px solid #000' }} fullWidth />
                        <h3>Salary</h3>
                        <Select
                            id="dropdown1"
                            value={selectedOption5}
                            onChange={handleChange5}
                            sx={{
                                width: '100%',
                                borderRadius: '4px',
                                border: '2px solid #000',
                                '& .MuiSelect-select': {
                                    padding: '10px',
                                },
                                '& .MuiSelect-icon': {
                                    color: '#000',
                                },
                                '&:hover': {
                                    border: '2px solid #000',
                                },
                            }}
                        >
                            <MenuItem value="Select Package">Select Package</MenuItem>
                            <MenuItem value="1-2 LPA">1-2 LPA</MenuItem>
                            <MenuItem value="3-4 LPA">3-4 LPA</MenuItem>
                            <MenuItem value="5-6 LPA">5-6 LPA</MenuItem>
                            <MenuItem value="More than 6 LPA">More than 6 LPA</MenuItem>
                        </Select>
                        <h3>Experience</h3>
                        <Select
                            id="dropdown2"
                            value={selectedOption6}
                            onChange={handleChange6}
                            sx={{
                                width: '100%',
                                borderRadius: '4px',
                                border: '2px solid #000',
                                '& .MuiSelect-select': {
                                    padding: '10px',
                                },
                                '& .MuiSelect-icon': {
                                    color: '#000',
                                },
                                '&:hover': {
                                    border: '2px solid #000',
                                },
                            }}
                        >
                            <MenuItem value="Select Experience">Select Experience</MenuItem>
                            <MenuItem value="0-1">0-1</MenuItem>
                            <MenuItem value="2-3">2-3</MenuItem>
                            <MenuItem value="4-5">4-5</MenuItem>
                            <MenuItem value="More than 5 Years">More than 5 Years</MenuItem>
                        </Select>
                        <Button variant="contained" fullWidth sx={{ mt: 3, borderRadius: '6px' }}>
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </FormControl>
        </Grid>
    );

    const renderRightSideCards2 = () => {
        // Calculate the starting and ending index for the current page
        const startIndex = (currentPage2 - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Slice the data array to get the items for the current page
        const currentItems = data2.slice(startIndex, endIndex);

        return currentItems.map((item, index) => (
            <Grid item xs={12} md={10} key={index}>
                <Card variant='outlined' sx={{ maxWidth: '100%', height: 270, boxShadow: 3, mb: 2 }}>
                    <CardContent sx={{ display: 'flex' }}>
                        <div style={{ flex: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="h6" component="div">
                                {item.heading}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.para1}
                            </Typography>
                            <Typography variant="body2">
                                {item.para2}
                            </Typography>
                            <Box sx={{ border: '1px solid #1591ea', width: 67, marginTop: 2, borderRadius: 4, padding: 1, backgroundColor: '#1591ea', color: '#fff', fontWeight: 900 }}>
                                {item.con}
                            </Box>
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CardActions>
                                <Button variant='contained'>View More</Button>
                                <span>Posted 2 days ago</span>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        ));
    };

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    variant={i === currentPage2 ? 'contained' : 'outlined'}
                    onClick={() => handlePageChange2(i)}
                    sx={{ mx: 0.5 }}
                >
                    {i}
                </Button>
            );
        }

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button
                    onClick={() => handlePageChange2(currentPage2 - 1)}
                    disabled={currentPage2 === 1}
                    sx={{ mx: 0.5 }}
                >
                    Previous
                </Button>
                {pageNumbers}
                <Button
                    onClick={() => handlePageChange2(currentPage2 + 1)}
                    disabled={currentPage2 === totalPages}
                    sx={{ mx: 0.5 }}
                >
                    Next
                </Button>
            </div>
        );
    };

    return (
        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
                {renderFormCard2()}
            </Grid>
            <Grid item xs={12} md={8}>
                {renderRightSideCards2()}
                {renderPagination()}
            </Grid>
        </Grid>
    );
}

export default InternpartMiddle;
