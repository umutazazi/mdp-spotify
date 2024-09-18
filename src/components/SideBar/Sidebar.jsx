import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search } from '@mui/icons-material';
import spotifylogo from '../../assets/spotify-logo.svg';
import { ListItem, List, TextField } from '@mui/material';
import libraryIcon from '../../assets/library-small.svg'
import '../SideBar/Sidebar.css'
import useData from '../../hook/useData'

const Sidebar = () => {
    const [jsonData, setJsonData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlaylists = jsonData.playlists.filter(playlist =>
        playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={spotifylogo} alt="Spotify" className="logo" />
            </div>
            <nav className="main-nav">
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link className='custom-link'to="/" ><Home /> Giriş</Link>
                    </li>
                    <li className={location.pathname === '/search' ? 'active' : ''}>
                        <Link className='custom-link' to="/search"><Search /> Gözat</Link>
                    </li>
                    <li className={location.pathname === '/library' ? 'active' : ''}>
                        <Link className='custom-link' to="/library">
                        <img src={libraryIcon} alt="Library" className="icon" /> Kitaplık </Link>
                    </li>
                </ul>
            </nav>
            <div className="playlists">
                <div className="playlist-header">
                    <h2>ÇALMA LİSTELERİN</h2>
                </div>
                <div className="playlist-search">
                    <Search />
                    <TextField
                        variant="standard"
                        placeholder="Ara"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{ color: 'white', input: { color: 'white' } }}
                    />
                </div>
                <List>
                    {filteredPlaylists.map((playlist, index) => (
                        <ListItem key={index}>{playlist.title}</ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Sidebar;