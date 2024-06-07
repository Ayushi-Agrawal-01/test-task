"use client";
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        height: '450px',
        backgroundColor: '#000',
        overflow: 'hidden',
        margin: 'auto',
        mt: 4,
        backgroundImage: `url(https://via.placeholder.com/1500x500)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!isPlaying ? (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Button
            onClick={handlePlayClick}
            variant="outlined"
            sx={{
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              minWidth: 'auto',
              color: '#fff',
              borderColor: 'aqua',
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 40, color: 'aqua' }} />
          </Button>
        </Box>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </Box>
  );
};

export default VideoPlayer;
