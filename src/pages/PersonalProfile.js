import React from 'react';
import {  Typography,
  Button,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

export default function PersonalProfile() {
  return (

   <div style={{backgroundColor:"#444444"}}>
     <AppBar sx={{ backgroundColor: "#C3073F" }} position="static">
        <Toolbar><img src='/op.png'  width="30" height="20"/>&emsp; 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            Profile
          </Typography>
          <a style={{ color: "white" }} href="/main" ><Button color="inherit">DashBoard</Button></a>
          <a style={{ color: "white" }} href="/profile" ><Button color="inherit">profile</Button></a>
        </Toolbar>
      </AppBar>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}>
      

      <div style={{ borderRadius:"15px",padding: "35px", backgroundColor: "#999999" }}>
        <div style={{ display: 'flex',padding:"25px", flexDirection: 'column', alignItems: 'center' }}>
          <Profile />
          <div style={{ padding: "25px" }}>
           
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
    <div style={{backgroundColor:"#444444",color:"white" }}>
              _______________________________
    </div>
   </div>
  );
}
