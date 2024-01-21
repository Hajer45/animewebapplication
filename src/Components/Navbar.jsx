import React from 'react'
import { AppBar,Toolbar,IconButton,Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const Navbar = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:'#0A1D56',alignItems:'center'}}>
        <Toolbar>
            <IconButton  sx={{color:'#fff'}}>
                <CatchingPokemonIcon />
            </IconButton>
            <Typography sx={{fontFamily:'Lobster'}} variant='h6' component='div'>AnimeHub</Typography>
           
        </Toolbar>
    </AppBar>
  )
}

export default Navbar