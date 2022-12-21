import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const CartButton = styled(Button, { name: 'cartbutton' })({
    '&:hover': {
        backgroundColor: 'white',
        boxShadow: 'none',
        borderColor: '#282828', //okvir crn
        color: 'black', //crna slowa
    },
    backgroundColor: '#282828', //crna
    color: 'white', // bjela slowa
    borderColor: '#282828',
});

export const ViewButton = styled(Button, { name: 'viewbutton' })({
    '&:hover': {
        backgroundColor: '#282828',
        boxShadow: 'none',
        borderColor: '#282828',
        color: 'white',
    },
    borderColor: '#282828',
    color: 'black',
});
