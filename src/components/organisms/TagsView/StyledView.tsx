import { Box, styled } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
export const BlueBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: theme.palette.mode === 'light' ? blue[100] : grey[900],
}));
