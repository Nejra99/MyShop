import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, viewItem } from '../../actions/products';
import { CartButton, ViewButton } from './CardStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCard = ({ data }) => {
    const { image, title, price, id } = data;
    const dispatch = useDispatch();

    const notify = () => {
        toast.success('Added To Cart!', {
            autoClose: 300,
        });
    };

    const onAdd = (id) => {
        dispatch(addToCart(id));
        notify();
    };

    const NewTitle = title.slice(0, 50);

    return (
        <>
            <Card sx={{ maxWidth: 270, m: 3 }}>
                <CardContent>
                    <CardMedia
                        sx={{
                            height: 250,
                            width: '100%',
                            objectFit: 'contain',
                        }}
                        component='img'
                        image={image}
                        alt='Product'
                    />
                    <CardContent sx={{ height: 70 }}>
                        <Typography gutterBottom variant='h8' component='div'>
                            {NewTitle}
                        </Typography>
                        <Typography variant='h6' color='text.primary'>
                            {price}$
                        </Typography>
                    </CardContent>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-around' }}>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/productinfo/${id}`}
                    >
                        <ViewButton
                            onClick={() => dispatch(viewItem(data))}
                            variant='outlined'
                            size='small'
                        >
                            VIEW
                        </ViewButton>
                    </Link>

                    <CartButton
                        onClick={() => onAdd(id)}
                        variant='outlined'
                        size='small'
                    >
                        ADD TO CART
                    </CartButton>
                </CardActions>
            </Card>
            <ToastContainer />
        </>
    );
};

export default MyCard;
