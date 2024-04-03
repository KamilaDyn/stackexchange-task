import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from './typography';
import palette from './palette';
import { Alert, Context } from './types';

const context = {
  colorMode: {
    toggleColorMode: () => {},
  },
  displayAlert: null,
  toggleAlert: (alert: Alert | null) => {},
};

export const AppContext = createContext<Context>(context);

export default function AppContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [displayAlert, setAlert] = useState<Alert | null>(null);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          ...typography,
        },
        palette: {
          ...palette,
          mode,
          text: {
            ...(mode === 'light'
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: '#fff',
                  secondary: 'rgba(255, 255, 255, 0.7)',
                }),
          },
          primary: {
            main: mode === 'light' ? blue[800] : blue[100],
          },
        },
        breakpoints: {
          values: {
            xs: 600,
            sm: 900,
            md: 1350,
            lg: 1700,
            xl: 1800,
          },
        },
      }),
    [mode]
  );
  const responsiveTheme = responsiveFontSizes(theme);
  const toggleAlert = (alert: Alert | null) => {
    setAlert(alert);
  };
  const contextValue = {
    colorMode,
    displayAlert,
    toggleAlert,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
