import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { ImageBox } from './ProductStyles';
import './ProductStyles/style.css';
import { CartButton } from '../Card/CardStyles';
import { addToCart } from '../../actions/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

function ProductInfo() {
    const dispatch = useDispatch();

    const notify = () => {
        toast.success('Added To Cart!', {
            autoClose: 300,
        });
    };

    const products = useSelector((state) => state.products.currentItem);
    const { id } = products;

    const onAdd = (id) => {
        dispatch(addToCart(id));
        notify();
    };

    return (
        <>
            <Grid>
                <NavBar />
                <ImageBox>
                    <img src={products.image} alt='product' />
                    <Box
                        sx={{
                            width: '400px',
                            marginLeft: '2%',
                            marginTop: '6%',
                        }}
                    >
                        <Typography variant='h4'>{products.title}</Typography>
                        <Typography variant='h7'>
                            {products.description}
                        </Typography>
                        <Typography variant='h5'>{products.price}$</Typography>
                        <CartButton onClick={() => onAdd(id)}>
                            ADD TO CART
                        </CartButton>
                    </Box>
                </ImageBox>
            </Grid>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default ProductInfo;
