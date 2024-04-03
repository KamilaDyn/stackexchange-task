import { Typography } from '@mui/material';
import { StyledBox } from './FooterStyle';
export default function Footer() {
  return (
    <StyledBox>
      <Typography variant='h2' align='center' color={'secondary.light'}>
        Made by Kamila Dynysiuk
      </Typography>
    </StyledBox>
  );
}
