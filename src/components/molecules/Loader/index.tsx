import { Box, Typography, CircularProgress } from '@mui/material';
import { LoaderModel } from './Loader.model';

export default function Loader({ text, color }: LoaderModel) {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress color={color || 'primary'} />
      {text && <Typography>{text}</Typography>}
    </Box>
  );
}
