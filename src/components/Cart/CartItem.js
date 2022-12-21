import { removeItem, adjustQty, viewItem } from '../../actions/products';
import { useDispatch } from 'react-redux';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import './CartStyles/style.css';
import { Link } from 'react-router-dom';
import { CartButton, ViewButton } from '../Card/CardStyles';

const CartItem = ({ data }) => {
    const { title, image, price, qty, id } = data;
    const [input, setInput] = useState(qty);
    const NewTitle = title.slice(0, 50);

    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeItem(id));
    };

    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(id, e.target.value));
    };

    return (
        <Card sx={{ width: 270, m: 3 }}>
            <CardContent>
                <CardMedia
                    sx={{ height: 250, width: '100%', objectFit: 'cover' }}
                    component='img'
                    image={image}
                    alt='Product'
                />
                <CardContent sx={{ height: 82 }}>
                    <Typography gutterBottom variant='h8' component='div'>
                        {NewTitle}
                    </Typography>
                    <Typography variant='h8' color='text.primary'>
                        Quantity: {qty}
                    </Typography>
                    <Typography variant='h6' color='text.primary'>
                        {price}$
                    </Typography>
                </CardContent>
            </CardContent>
            <CardActions>
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`/productinfo/${id}`}
                >
                    <CartButton
                        onClick={() => dispatch(viewItem(data))}
                        variant='outlined'
                        size='small'
                    >
                        VIEW
                    </CartButton>
                </Link>

                <ViewButton
                    onClick={() => handleClick(id)}
                    variant='outlined'
                    size='small'
                >
                    REMOVE
                </ViewButton>
                <input
                    className='input'
                    min='1'
                    type='number'
                    id='qty'
                    name='qty'
                    value={input}
                    onChange={handleChange}
                ></input>
            </CardActions>
        </Card>
    );
};

export default CartItem;
