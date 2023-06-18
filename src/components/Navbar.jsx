import { Stack, Typography, Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ myPokemons }) => {
    const navigate = useNavigate();
    return (
        <Stack
            direction='row'
            alignItems='center'
            p={2}
            sx={{ position: 'sticky', background: 'black', top: 0, left: 0, justifyContent: 'space-between' }}>

            <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png'} alt="logo" height={80} width={80} />
                <Typography sx={{
                    fontSize: { xs: '20px', md: '25px' },
                    marginLeft: { xs: '2px', md: '20px' },
                    color: 'white'
                }}
                >
                    POKEMON DETAILS
                </Typography>
            </Link>

            <Button variant='outlined'
                sx={{ fontSize: { xs: '10px', md: '20px' } }}
                onClick={() => navigate('/MyPokemons', { state: { myPokemons: myPokemons } })}
            > My Pokemons</Button>
        </Stack >
    )
}
export default Navbar