import React from 'react'
import { pokemonArray } from '../utils/constants';
import PokemonCard from './PokemonCard';
import { Box, Stack } from '@mui/material';
import Navbar from './Navbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import collection from "../models/User.js"

const Home = () => {
    const location = useLocation();
    const email = location?.state?.email;
    const [myPokemons, setMyPokemons] = useState([]);
    // const User = collection.findOne({ email: email });
    // console.log(User);

    return (
        <Box sx={{ backgroundColor: 'black', height: '100vh', overflow: 'auto', pl: 1 }}>
            <Navbar myPokemons={myPokemons} />
            {/* {email} */}
            <Stack direction='row' flexWrap='wrap' justifyContent="start" gap={2} margin={2}>
                {pokemonArray.map((item) => (
                    <PokemonCard pokemon={item} email={email} myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
                ))}
            </Stack>
        </Box>
    )
}
export default Home;