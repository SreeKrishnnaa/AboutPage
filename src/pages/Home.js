import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import  Avatar  from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BasicAccordion from './BasicAccordion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import LoginButton from './LoginButton';

const steps = [
  {
    label: 'Hound Vault for Students',
    description: `This Vault is for College Students. It helps students store their materials online. Create an account now!`,
  },
  {
    label: 'Clean and Simple',
    description:
      'This website is simple, clean, and user-friendly. No need for clumsy tutorials. Create your profile and segregate your files online.',
  },
  {
    label: <h3>'Avoid Sensitive Data!'</h3>,
    description: `This site is developed solely for accompanying students on their academic journey. Avoid the storage of sensitive data as that would be vulnerable to our environment.`,
  },
];

function DrawerAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#C3073F" }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src='/op.png'  width="30" height="20"/>
        <div >
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hound Vault
            </Typography>
        </div>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
          
          </IconButton>

          <div>
            <a href="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </a>
            <a href="#apho" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Aphorisms</Button>
            </a>
            <a href="#usecase" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Use Cases</Button>
            </a>
            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">About us</Button>
            </a>
            
            {/* <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Sign Up</Button>
            </a>
             <a href="/signin" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Sign in</Button>
            </a>  */}
           <LoginButton/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Extra() {
  return (
    <div id="usecase" style={{ backgroundColor: "#4E4E50", color: "white", padding: "25px" }}>
      <div style={{ textAlign: "center", marginLeft: "25px" }}>
        <Typography variant="h5" style={{ padding: "15px" }}>
          Use Cases
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <Card sx={{ width: '90%', maxWidth: 500, margin: '10px', backgroundColor: "#C3073F", color: "white" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais"
              alt="work"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>For Company Projects</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h4>
                  Work efficiently on projects, stay in sync, and keep company data safe—all in one place. This place can be used to store work/business-related docs and files.
                </h4>
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

        <Card sx={{ width: '90%', maxWidth: 500, margin: '10px', backgroundColor: "#C3073F", color: "white" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://img.freepik.com/free-vector/two-fathers-raising-son_74855-1483.jpg?w=2000"
              alt="work"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>For Personal</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h4> Keep everything that’s important to you and your family safe in one place. Back up files, materials, and more. Make use of this place to store your memories and personal files.</h4>
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

        <Card sx={{ width: '90%', maxWidth: 500, margin: '10px', backgroundColor: "#C3073F", color: "white" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://thumbs.dreamstime.com/b/programmer-working-program-web-developer-coding-computer-screen-code-script-open-windows-coder-engineer-vector-208530984.jpg"
              alt="work"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>For Coders</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h4>
                  Code files can be logically organized into folders and subfolders, mimicking the structure of your project. This also provides Back-up.
                </h4>
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

        <Card sx={{ width: '90%', maxWidth: 500, margin: '10px', backgroundColor: "#C3073F", color: "white" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://img.freepik.com/free-vector/coronavirus-news-update-illustration_52683-51043.jpg"
              alt="work"
            />
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h5" component="div">
                <h3>File-Shelves</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h4>Viable option for storing publishing materials. Convenient for frequent travelers or those with limited physical storage space.</h4>
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

      </div>
    </div>
  );
}

function Home() {
  const theme = createTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#4E4E50', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar Component */}
        <DrawerAppBar />

        {/* Stepper and Accordion Components */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '70px',
          }}
        >
          <Box sx={{ width: '90%',maxWidth: '800px', margin: '0 auto' }}>
            <Paper
              square
              elevation={0}
              sx={{width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                borderRadius:"8px",
                bgcolor: '#950740',
                color: "WHITE",
                marginBottom: '5px',
              }}
            >
              <Typography><b>{steps[activeStep].label}</b></Typography>
            </Paper>
            <Box sx={{width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 250,
              borderRadius:"15px",
                bgcolor: '#1A1A1D',
                color: "WHITE",
                marginBottom: '5px', }}>
              {steps[activeStep].description}
            </Box>
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
              sx={{
                bgcolor: 'white',
                p: 1,
                mt: 1,
                alignSelf: 'center',
                borderRadius:"8px",
              }}
            />
          </Box>
        </Box>
        <div id="apho" style={{ backgroundColor: "#4E4E50", color: "white", padding: '25px 0' }}>
          <div style={{ textAlign: "center", marginLeft: "25px" }}>
            <Typography variant="h5" style={{ padding: "15px" }}>
              Aphorisms
            </Typography>
          </div>
          <BasicAccordion />
        </div>
        <Extra />

        {/* Footer Component */}
        <Box
          component="footer"
          sx={{
            color: "white",
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: "#1A1A1D",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Copyright() {
  return (
    <div>
      <Typography variant="body1">Stay away from frauds!  {'Copyright © '}{new Date().getFullYear()} <Link color="inherit" href="">{' '}
        
     
          Hound Vault.
        </Link></Typography>
     
    </div>
  );
}

export default Home;
