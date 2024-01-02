import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Extra from './Extra';

export default function MainPage() {
    // create a new `Date` object
const now = new Date();


// get the current date and time as a string
const currentTime = now.toLocaleTimeString();

console.log(currentTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)
  return (
    <div style={{backgroundColor:"beige"}}>
  <Box sx={{ flexGrow: 1 }}>


<AppBar sx={{backgroundColor:"#C3073F"}} position="static">
  <Toolbar>
  <img src='/op.png'  width="30" height="20"/>&emsp; 
    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
      Welcome to  Hound Vault
    </Typography>
    <a style={{color:"white"}} href="/main" ><Button color="inherit">DashBoard</Button></a>
    <a style={{color:"white"}} href="/profile" ><Button color="inherit">profile</Button></a>
    <a style={{color:"white"}} href="/trash" ><Button color="inherit">trash</Button></a>
<Button color="inherit">{currentTime}</Button>
  </Toolbar>
</AppBar>
</Box>
<Extra/>
    </div>
  
  );
}