import React from 'react'
import { Card, CardContent, Typography, Button, Stack, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon, myPokemons, setMyPokemons }) => {
  const handleClick = () => {
    var temp = [...myPokemons];

    if (temp.indexOf(pokemon) >= 0) {
      alert("already added");
      return;

    }
    temp.push(pokemon);
    setMyPokemons([...temp]);

    console.log(temp);
  }
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', width: { md: 280, xs: '100%' }, borderRadius: 2 }}>

      <CardMedia sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '10px'
      }}
      >
        <img src={pokemon.image ? pokemon.image : `https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png`} height={80} width={80} alt={'Loading...'} />
      </CardMedia>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 100 }}>
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          Name: {pokemon.name}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" color="grey">
          Weight: {pokemon.weight}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" color="grey">
          Height: {pokemon.height}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="grey">
          Type: {pokemon.type[0]}
        </Typography>
      </CardContent>

      <Stack padding={1}>
        <Button variant="contained" color='success' sx={{ textAlign: 'center' }}
          onClick={handleClick}
        >ADD</Button>

      </Stack>
    </Card>
  )
}

export default PokemonCard;