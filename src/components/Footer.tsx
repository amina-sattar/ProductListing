import React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const FooterBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  color: theme.palette.text.secondary,
  position: 'relative',
  top: 'auto',
  bottom: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

const Footer = () => {
  return (
    <FooterBar>
      <Toolbar sx={{justifyContent:"center"}}>
        <Typography>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </Typography>
      </Toolbar>

    </FooterBar>
  );
};
export default Footer;
