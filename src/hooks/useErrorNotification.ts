import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';

interface ErrorNotification {
  isError: boolean;
  errorMessage: string;
}
export function useErrorNotification({
  isError,
  errorMessage,
}: ErrorNotification) {
  const { toggleAlert } = useContext(AppContext);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isError) {
      toggleAlert({
        severity: 'error',
        text: errorMessage,
      });
    }
    setTimeout(() => {
      if (toggleAlert) {
        toggleAlert(null);
      }
    }, 5000);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isError]);
}
