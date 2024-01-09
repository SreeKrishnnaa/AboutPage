import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading plzzz wait...</div>;
  }

  return (
    isAuthenticated && (
      <Paper elevation={3} style={{ color: "black", backgroundColor: "beige", borderRadius: "15px", padding: 46, textAlign: "center" }}>
        <Avatar alt={user.name} src={user.picture} sx={{ width: 90, height: 90, margin: "0 auto 16px" }} />
        <Typography variant="h5" component="div" gutterBottom>
          Hai ! {user.name}
        </Typography>
        <Typography>
          <b>Email:</b> {user.email}
        </Typography>
        
      </Paper>
    )
  );
};

export default Profile;
