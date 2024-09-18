import React,{useState,useEffect}from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Box,Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [jsonData, setJsonData] = useState(null);
  const navigate = useNavigate();
    const location = useLocation();

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const responseData = await useData('/api/web-team/case/spotify.json');
        setJsonData(responseData);  
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
       
      }
    };

    fetchData();  
   
  },[]);
  if (!jsonData) {
    return <div>Loading...</div>;
}
    return (
        <AppBar position="static" sx={{ backgroundColor: '#121212', boxShadow: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                
                {/* Sol Kısım - Geri ve İleri Butonları */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => navigate(-1)} disabled={location.pathname === '/'}>
                        <ArrowBackIcon sx={{color:'grey'}}/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIcon onClick={() => navigate(1)} sx={{ color: 'grey' }} />
                    </IconButton>
                </Box>

                {/* Orta Kısım - Arama Çubuğu */}
                <SearchBar/>

                {/* Sağ Kısım - Profil */}
                <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '9999px',
        padding: '4px 12px 4px 4px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <Avatar
        
        src={jsonData.user.profile_picture}
        sx={{ width: 24, height: 24, marginRight: 1 }}
      />
      <Typography 
        variant="body2" 
        sx={{ 
          color: 'white', 
          fontWeight: 'medium',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '150px',
        }}
      >
        {jsonData.user.name}
      </Typography>
    </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;