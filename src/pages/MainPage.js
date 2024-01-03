import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Extra from './Extra';

export default function MainPage() {
    
const now = new Date();
const currentTime = now.toLocaleTimeString();
console.log(currentTime); 
  return (
    <div >
  <Box sx={{ flexGrow: 1 }}>
  <AppBar sx={{backgroundColor:"#C3073F"}} position="static">
  <Toolbar>
  <img src='/op.png'  width="30" height="20"/>&emsp; 
    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
      Welcome to  Hound Vault !!
    </Typography>
    <a style={{color:"white"}} href="/main" ><Button color="inherit">DashBoard</Button></a>
    <a style={{color:"white"}} href="/profile" ><Button color="inherit">profile</Button></a>
    <a style={{color:"white"}} href="/trash" ><Button color="inherit">trash</Button></a>
 <Button color="inherit">{currentTime}</Button>
  </Toolbar>
</AppBar>
</Box>
{/* <Extra/> */}
    </div>
  
  );
}