import React from 'react'
import { AppBar, Toolbar, IconButton, InputBase, Avatar, Box, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/searchSlice';

const SearchBar = () => {
const dispatch = useDispatch();
const searchTerm = useSelector((state) => state.search.searchTerm);

const handleSearchChange = (event) => {
  dispatch(setSearchTerm(event.target.value));
};

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, maxWidth: '500px' }}>
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#333',
        borderRadius: '999px',
        width: '100%',
      }}
    >
      <InputBase
        placeholder="Ara"
        value={searchTerm}
        onChange={handleSearchChange}
        
        sx={{
          color: 'white',
          width: '100%',
          height: '30px',
          pl: '40px',  
          pr: '15px',
        }}
      />
      <SearchIcon
        sx={{
          color: '#ffffffa6',
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </Box>
  </Box>
  )
}

export default SearchBar