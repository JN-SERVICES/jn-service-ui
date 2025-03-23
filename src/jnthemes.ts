import { green, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: pink[800],
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export const PALETTE_COLORS = {
  bgcolor: 'rgb(231, 252, 244)',
  bgcolorPaper: 'rgb(255, 237, 244)',
  bgprimaryColor: 'rgb(255, 158, 190)',
  bgsecondaryColor: 'rgb(0, 177, 109)',
  textPrimaryColor: 'rgb(43, 38, 41)',
  textSecondaryColor: 'gray',
  textlightColor: 'rgb(234, 255, 247)',
};
