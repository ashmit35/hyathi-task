import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Stack } from '@mui/material';
import PokemonCard from './PokemonCard'

const MyPokemons = () => {
    const location = useLocation();
    const myPokemons = location.state.myPokemons;

    return (
        <Box sx={{ backgroundColor: 'black', height: '100vh', overflow: 'auto' }}>
            <Stack direction='row' flexWrap='wrap' justifyContent="start" gap={2} margin={2}>
                {myPokemons.map((item) => (
                    <PokemonCard pokemon={item} />
                ))}
            </Stack>
        </Box>
    )
}

export default MyPokemons