import React from 'react'
import { Card, CardContent, Typography, Button, Stack, CardMedia } from '@mui/material';
import { useState } from 'react';

const PokemonCard = ({ pokemon, myPokemons, setMyPokemons, myPokemonArea }) => {
  const [flag, setFlag] = useState(true);
  const [health, setHealth] = useState(100);

  const handleClick = () => {
    var temp = [...myPokemons];

    if (temp.indexOf(pokemon) >= 0) {
      alert("This pokemon is already added");
      return;
    }
    setFlag(!flag);
    temp.push(pokemon);
    setMyPokemons([...temp]);

    console.log(temp);
  }


  const feedPokemon = () => {
    if (health == 100) {
      alert("Health is full...");
      return;
    }

    setHealth(Math.min(health + 10, 100));
  }

  setTimeout(() => {
    setHealth(Math.max(0, health - 50));
  }, 1000000);



  return (
    <Card sx={{ backgroundColor: '#1e1e1e', width: { md: 280, xs: '100%' }, border: '1px solid white', borderRadius: 2, cursor: 'pointer' }}>

      <CardMedia sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '10px'
      }}
      >
        <img src={pokemon.image ? pokemon.image : `https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png`} height={200} width={200} alt={'Loading...'} />
      </CardMedia>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 130 }}>
        <Typography variant="body1" fontWeight="bold" color="white">
          Name: {pokemon.name}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" color="crimson">
          Weight: {pokemon.weight}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" color="grey">
          Height: {pokemon.height}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="orange">
          Type: {pokemon.type[0]}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="greenyellow">
          Health: {health}
        </Typography>
      </CardContent>

      <Stack padding={1}>
        {myPokemonArea ? (
          <Stack direction='row' justifyContent={'space-between'} >
            < Button variant="contained" sx={{ textAlign: 'center' }}
              onClick={feedPokemon}
              width='50px'
              color={health < 50 ? 'error' : 'success'}
            >
              {health < 50 ? 'Low Health(FEED)' : 'FEED'}
            </Button>
            < Button variant="contained" sx={{ textAlign: 'center' }}
              color='error'
              onClick={() => { }}
            >REMOVE</Button>

          </Stack>
        ) : (
          <Button variant="contained" color={flag ? "success" : "error"} sx={{ textAlign: 'center' }}
            onClick={handleClick}
          >{flag ? 'ADD' : 'ADDED'}</Button>
        )}

      </Stack>
    </Card >
  )
}

export default PokemonCard;