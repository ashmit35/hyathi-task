import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material';
import PokemonCard from './PokemonCard'
import { useNavigate } from 'react-router-dom';

const MyPokemons = () => {
    const location = useLocation();
    const myPokemons = location.state.myPokemons;
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: 'black', height: '100vh', overflow: 'auto', padding: 2 }}>

            <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
                <Typography color='white' sx={{ fontSize: { xs: '30px', md: '50px' } }}>
                    <span>My</span> Pokemons
                </Typography>

                <Button variant='outlined' sx={{ width: { md: '200px', xs: '20px' }, height: '50px' }} onClick={() => navigate('/home')}>HOME</Button>
            </Stack>

            {myPokemons.length ? (<Stack direction='row' flexWrap='wrap' justifyContent="start" gap={2} margin={2}>
                {myPokemons.map((item) => (
                    <PokemonCard pokemon={item} myPokemonArea={true} />
                ))}
            </Stack>) : (
                <Typography variant='h5' color='white'>No Pokemons in your list...</Typography>
            )}

        </Box>
    )
}

export default MyPokemons