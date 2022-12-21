import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SumBox = styled(Box, { name: 'sumbox' })({
    width: '25%',
    height: 100,
    textAlign: 'center',
    padding: 2,
    marginTop: 50,
    border: 'solid 2px',
    borderRadius: '16px',
    backgroundColor: '#f5f5f5',
    boxShadow:
        '9px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
});

export const ContainerBox = styled(Box, { name: 'container' })({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
});
