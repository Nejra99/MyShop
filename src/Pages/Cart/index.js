import CartItem from '../../components/Cart/CartItem';
import { useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { ContainerBox, SumBox } from '../../components/Cart/CartStyles';
import NavBar from '../../components/NavBar/NavBar';

const Cart = () => {
    const cart = useSelector((state) => state.products.cart);
    const [totalItems, setItems] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let items = 0;
        let cash = 0;

        cart.forEach((item) => {
            items += item.qty;
        });
        setItems(items);

        cash = cart
            .reduce((total, item) => total + item.price * item.qty, 0)
            .toFixed(2);
        setPrice(cash);
    }, [totalItems, setItems, price, setPrice, cart]);

    return (
        <Box>
            <NavBar />
            <Grid
                container
                spacing={3}
                direction='row'
                alignItems='center'
                justifyContent='center'
                marginTop='40px'
            >
                {cart.map((prod) => {
                    return <CartItem data={prod} key={prod.id} />;
                })}
            </Grid>

            <ContainerBox>
                <SumBox>
                    <Typography variant='h5'>Your cart</Typography>

                    <Typography variant='h6'>
                        Total Items : {totalItems}
                    </Typography>
                    <Typography variant='h6'>Total price : {price}$</Typography>
                </SumBox>
            </ContainerBox>
        </Box>
    );
};

export default Cart;
