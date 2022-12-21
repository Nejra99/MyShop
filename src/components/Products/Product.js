import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MyCard from '../Card/MyCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../actions/products';
import Footer from '../../components/Footer/Footer';

function Product() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products.products);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                <Typography variant='h2'>Products</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                }}
            >
                <Grid
                    container
                    spacing={3}
                    display='flex'
                    direction='row'
                    justifyContent='center'
                    width={'80%'}
                    marginLeft='9.3%'
                >
                    {products.map((product) => {
                        return <MyCard data={product} key={product.id} />;
                    })}
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default Product;
