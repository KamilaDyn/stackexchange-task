import { useContext } from 'react';
import { Alert as MuiAlert } from '@mui/material';
import { AppContext } from '@/context/AppContext';
import { AlertModal } from './Alert.modal';
export default function Alert({ variant }: AlertModal) {
  const { displayAlert, toggleAlert } = useContext(AppContext);

  if (!displayAlert) {
    return null;
  }
  return (
    <MuiAlert
      onClick={() => toggleAlert(null)}
      variant={variant || 'filled'}
      severity={displayAlert.severity}
      sx={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {displayAlert.text}
    </MuiAlert>
  );
}
