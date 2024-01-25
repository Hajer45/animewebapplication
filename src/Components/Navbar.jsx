import React from 'react'
import { AppBar,Toolbar,IconButton,Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import  {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:'#0A1D56',alignItems:'center'}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Toolbar>
        
            <IconButton  sx={{color:'#fff'}}>
                <CatchingPokemonIcon />
            </IconButton>
            
          <Typography sx={{ fontFamily: 'Lobster' }} variant='h6' component='div'>
            AnimeHub
          </Typography>
                
        </Toolbar>
        </Link>  
    </AppBar>
  )
}

export default Navbar