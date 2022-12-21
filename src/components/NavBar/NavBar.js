import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartBox } from './NavbarStyles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchAppBar = () => {
    const [cartCounter, setCartCounter] = useState(0);

    const products = useSelector((state) => state.products.cart);

    useEffect(() => {
        let count = 0;
        products.forEach((item) => {
            count = count + item.qty;
        });
        setCartCounter(count);
    }, [cartCounter, products]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='default'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant='h3'
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            display: { xs: 'none', sm: 'block' },
                            fontFamily: 'Pacifico ',
                        }}
                    >
                        <Link
                            style={{ textDecoration: 'none', color: 'black' }}
                            to={'/'}
                        >
                            FashionIN
                        </Link>
                    </Typography>

                    <CartBox>
                        <Link style={{ textDecoration: 'none' }} to='/cart'>
                            <ShoppingCartIcon sx={{ color: 'black' }} />
                        </Link>
                        {cartCounter}
                    </CartBox>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default SearchAppBar;
