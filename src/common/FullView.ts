import { styled } from '@mui/material';

export const FullView = styled('div')(({ theme }) => ({
  width: '100vw',
  padding: 0,
  margin: 0,
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff',
  minHeight: '100vh',
}));
