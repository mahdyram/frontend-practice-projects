import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 250,           // ← حداکثر عرض روی موبایل
  height: 40,              // ارتفاع پایه
  [theme.breakpoints.up('sm')]: {
    maxWidth: 300,
    height: 45,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 400,
    height: 50,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flex: 1,
  '& .MuiInputBase-input': {
    padding: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // متن تایپ شده از چپ شروع شود
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: 24 }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search products…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
