import { Paper, Typography } from '@mui/material';
import { EmptyViewModal } from './EmptyViewModal';

export default function EmptyView({ text, elevation }: EmptyViewModal) {
  return (
    <Paper
      elevation={elevation || 2}
      variant='elevation'
      sx={{
        minHeight: 100,
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{text}</Typography>
    </Paper>
  );
}
