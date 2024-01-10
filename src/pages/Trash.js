import * as React from 'react';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';



function DenseAppBar() {
  return (
   
<AppBar sx={{backgroundColor:"#C3073F"}} position="static">
  <Toolbar>
  <img src='/op.png'  width="30" height="20"/>&emsp; 
    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
   Trash
    </Typography>
    <a style={{color:"white"}} href="/main" ><Button color="inherit">DashBoard</Button></a>
    <a style={{color:"white"}} href="/profile" ><Button color="inherit">profile</Button></a>
    <a style={{color:"white"}} href="/trash" ><Button color="inherit">trash</Button></a>

  </Toolbar>
</AppBar>
  );
}





export default function Trash() {
  
  return (
    <div>
      <DenseAppBar/>
    </div>
  );
}