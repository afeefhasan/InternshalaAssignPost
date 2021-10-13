import React from 'react';
import "../container/App.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';

function Cards({ title, body, id }) {
  console.log(id)
  return (
    <Box sx={{ minWidth: 300 }} >
      <Card variant="outlined" sx={{color:"#1976d2",borderColor:"#1976d2", bgcolor: 'white',
        '&:hover': {
          backgroundColor: '#1976d2',
          color:"white",
          opacity: [0.9, 0.8, 0.7,0.6],
        }}} >
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14}} color="text.secondary"
       gutterBottom>
        Post {id}
      </Typography>
      <Tooltip title="Title" arrow>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
</Tooltip>
      
      <br />
      <Tooltip title="Body" arrow>
      <Typography variant="body2">
        {body}
      </Typography>
</Tooltip>
      
    </CardContent>
  </React.Fragment>
      </Card>
    </Box>
  );
}
export default Cards;
