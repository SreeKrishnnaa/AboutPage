import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

function BasicAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card sx={{ borderRadius: "8px", width: '100%', maxWidth: '800px', mb: '15px', bgcolor: '#C3073F', color: 'white' }}>
        <CardHeader
          title={<Typography><b>― Valuable Storage</b></Typography>}
          action={
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              “Proper storage is about creating a home for something so that minimal effort is required to find it and put it away.”
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ borderRadius: "8px", width: '100%', maxWidth: '800px', mb: '15px', bgcolor: '#1A1A1D', color: 'white' }}>
        <CardHeader
          title={<Typography><b>― Value of Data</b></Typography>}
          action={
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              “In the next three years, the value of data will increase, making it even more valuable than it is today. The more efficiently you store your data, the more benefits your business will see.”
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ borderRadius: "8px", width: '100%', maxWidth: '800px', bgcolor: '#950740', color: 'white' }}>
        <CardHeader
          title={<Typography><b>― Security</b></Typography>}
          action={
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              "Safety and security don't just happen; they are the result of collective consensus and public investment."
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default BasicAccordion;
