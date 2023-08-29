import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    "fontFamily": `"Rubik", "Helvetica", "Arial", sans-serif`,
    h6: {
      lineHeight: '24px'
    },
  },
});

export default theme;