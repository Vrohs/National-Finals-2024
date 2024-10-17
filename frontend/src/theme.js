import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Dark green
    },
    secondary: {
      main: '#ffc107', // Amber
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    success: {
      main: '#4caf50', // Green
    },
    warning: {
      main: '#ff9800', // Orange
    },
    info: {
      main: '#00acc1', // Cyan
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 700,
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
  },
});

export default theme;