import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Home24Logo } from '../assets/home-24-logo.svg';

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 2,
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <AppBarWrapper>
      <Toolbar>
        <SvgIcon
          sx={{
            fontSize: 80,
          }}
        >
          <Home24Logo />
        </SvgIcon>
        <div style={{ flexGrow: 1 }}></div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{color: "home24.main"}}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'Search' }}
          />
        </Search>
      </Toolbar>
    </AppBarWrapper>
  );
}
