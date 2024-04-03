import { Box, styled } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? blue[900] : grey[900],
  minHeight: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
