import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    home24: Palette['primary'];
  }
   // allow configuration using `createTheme`
  interface PaletteOptions {
    home24: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    home24:{
      light: '#f6755c ',
      main: '#f45334',
      contrastText: '#fff'
    },
  },
});
export default theme;
