import { Container, Typography } from '@mui/material';
import { ToggleMode } from '@/components/molecules';

export default function Header() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginButton: '20px',
      }}
    >
      <Typography variant='h1' color={'primary.main'}>
        Stack Exchange - task
      </Typography>

      <ToggleMode />
    </Container>
  );
}
