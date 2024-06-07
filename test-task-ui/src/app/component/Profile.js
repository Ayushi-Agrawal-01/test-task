"use client"
import { Box, Grid, Typography, Button } from '@mui/material';
import useResponsive from '../service/useResponsive';

const Profile = () => {
    const isMobileDevice = useResponsive();
  return (
    <Box sx={{ flexGrow: 1, px: isMobileDevice ? 5 : 20, mt: 10 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://via.placeholder.com/400"
            alt="Placeholder Image"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
            <Box marginTop={2}>
                <Typography variant="h4" gutterBottom>
                    This is a large paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Typography>
            </Box>
            <Box marginTop={2}>
                <Typography variant="h8" gutterBottom sx={{ fontWeight: 'bold' }}>
                    This is a large paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
                </Typography>
            </Box>
            <Box marginTop={2}>
                <Typography variant="h8" gutterBottom>
                    This is a large paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                    dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
                    id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. 
                    dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
                    id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. 
                </Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 2, width: isMobileDevice ? "100%" : '50%', borderRadius: 0, p: 1, backgroundColor: 'purple'}}>
                Learn More
            </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
