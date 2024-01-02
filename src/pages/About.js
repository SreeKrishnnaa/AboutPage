import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import LoginButton from './LoginButton';

function DrawerAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#C3073F" }} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hound Vault
            </Typography>
          </IconButton>

          <div>
            <a href="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </a>
            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">About us</Button>
            </a>
            {/* <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Signup </Button>
            </a>
            <a href="/signin" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Signin</Button>
            </a> */}
            <LoginButton/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function About() {
  return (
    <div style={{ color: "white", background: 'black' }}>

      <DrawerAppBar />
      <h2>About Us:</h2>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Card sx={{ backgroundColor: "#4E4E50", color: "white", maxWidth: 300, padding: '15px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://img.freepik.com/premium-vector/web-document-secure-confidential-online-access-internet-website-vector-isolated-digital-privacy-lock-protection-text-file-flat-icon_212005-116.jpg"
                alt="img2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Secured Documents
                </Typography>
                <Typography variant="body2" color="text.white">
                  Students can securely store and organize academic documents, such as lecture notes, research papers, and class presentations in their individual vaults.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="/Signup"><Button sx={{ backgroundColor: "#950740", color: "white" }} size="small" color="primary">
                Secure Now!
              </Button></a>
            </CardActions>
          </Card>

          <Card sx={{ backgroundColor: "#4E4E50", color: "white", maxWidth: 300, padding: '15px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://img.freepik.com/premium-vector/file-transfer-two-laptops-with-folders-screen-transferred-documents-copy-files-data-exchange-backup-file-sharing-concepts-upload-document-flat-style-vector-illustration_735449-148.jpg?w=2000"
                alt="img1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Minimalistic Storage Approach
                </Typography>
                <Typography variant="body2" color="text.white">
                  The platform can adopt a minimalist storage approach by allowing users to store links, pointers, or summaries of materials rather than hosting large files directly. This can save storage space and reduce the risk associated with storing bulk data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="/signup"><Button sx={{ backgroundColor: "#950740", color: "white" }} size="small" color="primary">
                Save Storage.
              </Button></a>
            </CardActions>
          </Card>

          <Card sx={{ backgroundColor: "#4E4E50", color: "white", maxWidth: 300, padding: '15px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://img.freepik.com/free-vector/set-different-teachers_23-2148518534.jpg?w=2000"
                alt="img3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Integrated Vault
                </Typography>
                <Typography variant="body2" color="text.white">
                  An Integrated Vault that ensures a seamless experience for both students and educators by creating a centralized repository for their academic achievements.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="/signup"><Button sx={{ backgroundColor: "#950740", color: "white" }} size="small" color="primary">
                Achieve it
              </Button></a>
            </CardActions>
          </Card>
        </div>

        <p>
          <h2>Welcome to Hound Vault !</h2>
          <p>We understand the challenges of managing academic materials, and we're here to simplify the process for you.</p>

          <h3>Our Mission</h3>

          <p>At Hound Vault, our mission is to provide students with a secure and user-friendly platform to store and organize their study materials. We believe that a well-designed digital vault can make a significant difference in how students approach their academic journey.</p>

          <h3>Secure Storage</h3>

          <p>We prioritize the security of your materials. While offering a convenient digital storage solution, we do not allow the storage of sensitive or confidential data. Your privacy is our top priority. Navigating through our platform is a breeze. We've designed an intuitive interface that allows you to effortlessly store and retrieve your materials. No tech-savvy skills required!</p>

          <h3>Individualized Experience</h3>

          <p>We focus on providing a personalized experience for every student, ensuring that you can manage your academic resources with ease.</p>

          <h3>No Bulk Data, No Hassle</h3>

          <p>Unlike other platforms, we're not here for bulk data storage. Hound Vault is specifically tailored for students who want a simple, streamlined solution for their study materials.</p>

          <h3>Get Started Today!</h3>

          <p>Ready to experience the convenience of a secure and user-friendly online vault? Sign up now and start organizing your academic journey with Hound Vault.</p>

        </p>

        <CardActions>
          <a href="/home"><Button size="small" color="primary">
            Home @HoundVault
          </Button></a>
        </CardActions>

      </div>
    </div>
  );
};

export default About;
