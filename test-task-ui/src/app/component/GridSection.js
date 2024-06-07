"use client"
import useResponsive from '../service/useResponsive';
import { Container, Typography, Box, Grid, Card, CardContent, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const cards = [
  {
    title: 'Financial statements',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Press releases',
    content: 'Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.',
  },
  {
    title: 'Webcast links',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere vestibulum neque ac posuere.',
  },
  {
    title: 'Corporate governance',
    content: 'Morbi purus libero, elementum nec gravida ac, commodo at erat.',
  },
];
export default function GridSection() {
  const isMobileDevice = useResponsive(); // Check if screen size is below 864px

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          pt: 10,
          backgroundImage: 'url("./dummyImage.jpg")', // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid container spacing={0} sx={{ height: '100%' }}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={3} key={index} sx={{height: isMobileDevice ? "500px" : '566px'}}>
              <Card
                sx={{
                  height: '100%', // Apply card height only for screen size below 864px
                  paddingLeft:3,
                  paddingBootom:4,
                  backgroundColor: 'rgba(0, 0, 0, 0.5 )',
                  color: 'white',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                  transition: 'background-color 2s',
                  fontSize: '10px',
                  '.content': {
                      display:'none', 
                    },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7 )',
                   '.content': {
                     display:'block', 
                    },
                    '.iconWrapper':{
                      backgroundColor:'white',
                      color:'transparent'
                    },
                    '.icon': {
                      color:'black',
                      opacity:1,
                    }
                  },
                 }}
              >
                <CardContent  sx={{
                  width: "80%",
                  display:'flex',
                  flexDirection:'column',
                  gap:4,
                }}>
                  <IconButton className={'iconWrapper'} aria-label="add" sx={{ color: 'white', borderRadius:100,padding:3, border:"1px solid #FFF",width:'fit-content',fontSize: 40  }}>
                    <AddIcon sx={{ fontSize: 40 }} className={'icon'}/>
                  </IconButton>
                  <Box>
                  <Typography sx={{minHeight:64}} variant="h6" component="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className="content" component="p" 
                  >
                    {card.content}
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
