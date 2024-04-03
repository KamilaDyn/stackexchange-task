export interface Alert {
  severity: 'success' | 'info' | 'warning' | 'error';
  text: string;
}
export interface Context {
  displayAlert: Alert | null;
  toggleAlert: (alert: Alert | null) => void;
  colorMode: {
    toggleColorMode: () => void;
  };
}
