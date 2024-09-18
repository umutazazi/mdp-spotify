import React from 'react';
import { Card, CardMedia, CardContent, Typography,Box} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const PlaylistCard = ({ title, description, image }) => {
    return (
        <Card sx={{ 
            width: 180, 
            backgroundColor: '#181818', 
            color: 'white', 
            borderRadius: '8px',
            '&:hover .playButton': {
              opacity: 1,
              transform: 'translateY(0)',
            }
          }}>
            <Box sx={{ position: 'relative', paddingTop: '100%' }}>
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box 
                className="playButton"
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  bgcolor: '#1db954',
                  borderRadius: '50%',
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transform: 'translateY(8px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) !important',
                  },
                }}
              >
                <PlayArrow sx={{ fontSize: 28, color: 'black' }} />
              </Box>
            </Box>
            <CardContent sx={{ padding: 2 }}>
              <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', mb: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {title}
              </Typography>
              <Typography variant="body2" color="#a7a7a7" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {description}
              </Typography>
            </CardContent>
          </Card>
    );
};

export default PlaylistCard;
