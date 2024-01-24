import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Form from './Form';
export default function MainPage() {
  const { loginWithRedirect } = useAuth0();
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const {user,isAuthenticated} = useAuth0();



  if (!isAuthenticated) {
    // If not authenticated, show a warning to sign in
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <Typography variant="h4" gutterBottom>
            Please sign in to access this page.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  // If authenticated, render the main page content
  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#C3073F" }} position="static">
          <Toolbar>
            <img src='/op.png' width="30" height="20" />&emsp;
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
              Welcome to Hound Vault !!
            </Typography>
            <a style={{ color: "white" }} href="/main"><Button color="inherit">DashBoard</Button></a>
            <a style={{ color: "white" }} href="/profile"><Button color="inherit">profile</Button></a>
            <Button color="inherit">{currentTime}</Button>


           
            
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "45px", flex: 1 }}>
        <Form />
      </div>
    </div>
  );
}
