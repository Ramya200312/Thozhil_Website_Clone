import React from 'react';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import logoimg from './Asserts/static/logoimg.png';


const drawerWidth = 210;
const navItems = ['Home', 'Jobs', 'Internships', 'How It Works', 'FAQ'];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [jobsAnchorEl, setJobsAnchorEl] = React.useState(null);
  const [internshipsAnchorEl, setInternshipsAnchorEl] = React.useState(null);
  const [buttonB1,setButtonB1] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleJobsMenuClick = (event) => {
    setJobsAnchorEl(event.currentTarget);
  };

  const handleJobsMenuClose = () => {
    setJobsAnchorEl(null);
  };

  const handleInternshipsMenuClick = (event) => {
    setInternshipsAnchorEl(event.currentTarget);
  };

  const handleInternshipsMenuClose = () => {
    setInternshipsAnchorEl(null);
  };

  const handleClick = (event) => {
     setButtonB1(event.currentTarget);
  };
  const handleClickClose = (event) => {
    setButtonB1(null);
 };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" className="appBarMargin" sx={{ backgroundColor: '#fff', color: '#000', height: '100px' }}>
          <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <img src={logoimg} alt="Thozhil Logo" style={{ height: '60px', paddingLeft: '10%' }} />

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={NavLink}
                  to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                  sx={{
                    color: '#000',
                    textTransform: 'none', 
                    '&.active': {
                      color: '#1591ea',
                      fontWeight: 900,
                    },
                    '&:hover': {
                      color: '#1591ea',

                    },
                  }}
                  onMouseOver={
                    item === 'Jobs' ? handleJobsMenuClick :
                    item === 'Internships' ? handleInternshipsMenuClick :
                    undefined
                  }
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              component={NavLink}
              open={Boolean(buttonB1)}
              onClose={handleClickClose}
              ButtonB1={buttonB1}
              to="/login"
              onClick={handleClickClose}
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{
                background: 'linear-gradient(45deg,#736efe,#5efce8)',
                color: '#fff',
                borderRadius: '50px',
                textTransform: 'none', 
                '&:hover': {
                  background: 'linear-gradient(45deg,#736efe,#5efce8)',
                  color: '#000', 
                  textTransform: 'none', 

                },
              }}
            >
              Login/Register
            </Button>
            <Menu
              id="jobs-menu"
              anchorEl={jobsAnchorEl}
              open={Boolean(jobsAnchorEl)}
              onClose={handleJobsMenuClose}
            >
              <MenuItem
                component={NavLink}
                to="/jobs/fulltime"
                onClick={handleJobsMenuClose}
                sx={{
                  color: '#000000',
                  '&.active': {
                    color: '#1591ea',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: '#1591ea',
                  },
                }}
              >
                Full-Time
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/jobs/parttime"
                onClick={handleJobsMenuClose}
                sx={{
                  color: '#000000',
                  '&.active': {
                    color: '#1591ea',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: '#1591ea',
                  },
                }}
              >
                Part-Time
              </MenuItem>
            </Menu>
            <Menu
              id="internships-menu"
              anchorEl={internshipsAnchorEl}
              open={Boolean(internshipsAnchorEl)}
              onClose={handleInternshipsMenuClose}
            >
              <MenuItem
                component={NavLink}
                to="/internships/fulltime"
                onClick={handleInternshipsMenuClose}
                sx={{
                  color: '#000000',
                  '&.active': {
                    color: '#1591ea',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: '#1591ea',
                  },
                }}
              >
                Full-Time
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/internships/parttime"
                onClick={handleInternshipsMenuClose}
                sx={{
                  color: '#000000',
                  '&.active': {
                    color: '#1591ea',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: '#1591ea',
                  },
                }}
              >
                Part-Time
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
