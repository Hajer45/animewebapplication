import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CharacCard({images,role,name}) {
  return (
    <Card >
      <CardActionArea sx={{ width:"100%",height:"100%"}}>
        <CardMedia
          component="img"
          height="140"
          image={images?.jpg.image_url} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
