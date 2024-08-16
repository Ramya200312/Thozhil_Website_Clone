import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ mainTitle, subscribeButtonText, sections, developedBy, copyright }) => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {mainTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <TextField placeholder="Email Address" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '50px' }}
              fullWidth
            >
              {subscribeButtonText}
            </Button>
          </Grid>
          {sections && sections.length > 0 && sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6">{section.title}</Typography>
              {section.title === "Join Us" && (
                <Box mb={2}>
                  <IconButton href="https://www.facebook.com" target="_blank">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="https://www.twitter.com" target="_blank">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="https://www.instagram.com" target="_blank">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              )}
              {section.items.map((item, idx) => (
                <MuiLink
                  component={Link}
                  to={item.href}
                  variant="body2"
                  display="block"
                  key={idx}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {item.text}
                </MuiLink>
              ))}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography variant="body2" style={{ textAlign: 'center' }}>
                {developedBy}
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'center' }}>
                {copyright}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
