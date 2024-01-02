import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
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




function generate(element) {
  return [0, 1,2,3,4].map((value) =>
    React.cloneElement(element,
         {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Trash() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (<div>
    <DenseAppBar/>
    
<div style={{display:"flex",justifyContent:"center",padding:"50px"}}>
<Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <FormGroup row sx={{justifyContent:"center"}}>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
     
      <Grid container spacing={2} sx={{justifyContent:"center"}}>
      
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        <h3>  Files in trash</h3>
          </Typography>
          <Demo style={{backgroundColor:"beige"}}>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="File"
                    secondary={secondary ? 'description' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
</div>
  </div>
  );
}