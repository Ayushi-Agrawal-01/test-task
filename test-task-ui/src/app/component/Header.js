"use client"
import { Box, Typography, Icon, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import useResponsive from '../service/useResponsive';

const Header = () => {
    const isMobileDevice = useResponsive();
  return (
    <>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        backgroundImage: `url(https://via.placeholder.com/1500x500)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <Box
            sx={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            color: 'white',
            textAlign: 'center',
            p: 10,
            }}
        >
            <Typography variant="h4">Lorem ipsum dolor sit amet, consec</Typography>
            <Typography>
            Aliquam eu malesuada turpis, ac tincidunt nibh. Etiam tristique eros
            in ligula convallis malesuada. Praesent posuere velit lorem.
            </Typography>
        </Box>
    </Box>
   
  <Box sx={{ px: isMobileDevice ? 5 : 40, textAlign: 'center', mt: 4 }}>
    <Box>
        <Icon sx={{ fontSize: 40 }}>
        <InfoIcon sx={{ fontSize: 40 }} />
        </Icon>
    </Box>

    <Box marginTop={2}>
        <Typography variant="h4" gutterBottom>
            This is a large paragraph of text. Lorem ipsum dolor sit amet 
        </Typography>
    </Box>
    <Box marginTop={2}>
        <Typography variant="h8" gutterBottom>
        This is a large paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            SuspeThis is a large paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
        </Typography>
    </Box>
    <Box marginTop={2}>
        <Button variant="outlined">About Us</Button>
    </Box>
  </Box>
  </>
  );
};

export default Header;
