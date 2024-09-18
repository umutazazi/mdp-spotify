import React, { useState, useEffect } from 'react';
import { Grid2, Typography, Box } from '@mui/material';
import PlaylistCard from '../PlaylistCard/PlaylistCard';

import { useSelector } from 'react-redux';
import useData from '../../hook/useData'


const PlaylistGrid = () => {
    const [jsonData, setJsonData] = useState(null);
    const searchTerm = useSelector((state) => state.search.searchTerm);

  
 
 
   

    useEffect(() => {
      
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
         

      
    }, [searchTerm]);
   

    if (!jsonData) {
        return <div>Loading...</div>;
    }

    const filterPlaylists = (playlists) => {
        return playlists.filter(playlist =>
            playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography sx={{ color: 'white', marginBottom: '20px', fontSize: 30 }}>
                Yakında Çalanlar
            </Typography>
            <Grid2 container spacing={3}>
                {filterPlaylists(jsonData.recently_played).map((playlist, index) => (
                    <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
                        <PlaylistCard
                            title={playlist.title}
                            description={playlist.description}
                            image={playlist.image}
                        />
                    </Grid2>
                ))}
            </Grid2>
            <Typography sx={{ color: 'white', marginBottom: '20px', fontSize: 30,paddingTop:5 }}>
                Tavsiye Edilenler
            </Typography>
            <Grid2 container spacing={3}>
                {filterPlaylists(jsonData.recommended).map((recommended, index) => (
                    <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
                        <PlaylistCard
                            title={recommended.title}
                            description={recommended.description}
                            image={recommended.image}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default PlaylistGrid;
