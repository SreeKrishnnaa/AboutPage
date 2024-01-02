import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

export default function PersonalProfile() {
  return (

   <div>
     <AppBar sx={{ backgroundColor: "#C3073F" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            Profile
          </Typography>
          <a style={{ color: "white" }} href="/main" ><Button color="inherit">DashBoard</Button></a>
          <a style={{ color: "white" }} href="/profile" ><Button color="inherit">profile</Button></a>
          <a style={{ color: "white" }} href="/trash" ><Button color="inherit">trash</Button></a>
        </Toolbar>
      </AppBar>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}>
      

      <div style={{ borderRadius:"15px",padding: "35px", backgroundColor: "#4E4E50" }}>
        <div style={{ display: 'flex',padding:"15px", flexDirection: 'column', alignItems: 'center' }}>
          <Profile />
          <div style={{ padding: "25px",marginTop:"25px" }}>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
