"use client"
import { Container, TextField, TextareaAutosize, Button, Typography, Box } from '@mui/material';
import useResponsive from '../service/useResponsive';

export default function FormSection() {
  const isMobileDevice = useResponsive(); 

  return (
  	 <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/garden.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
  <Box 
    sx={{  
          height: 'auto',
          width: '90%',
          maxWidth: '450px',
          padding: isMobileDevice? '15px': '50px',
          backgroundColor: 'rgba(12, 11, 11, 0.43)',
          borderRadius: '0px',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          margin: '0 auto',
          position: isMobileDevice? 'relative' : 'absolute',
          top: isMobileDevice? '20px': '150px',
          right: isMobileDevice?  '0px' : '250px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '.title': {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '1rem',
          },
          '.sub-heading': {
            color: 'white',
            fontSize: '1rem',
          },
          '.textArea': {
            width: '100%',
            marginTop: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            '&::placeholder': {
              color: 'white',
            },
            '&:focus': {
              borderColor: 'blue',
            },
          },
          '.inputField': {
            'background-color': '#000'
          },
          '.button': {
            marginTop: '20px',
            backgroundColor: '#fff',
            width: '100%',
            color: '#000',
            '&:hover': {
              backgroundColor: 'darkblue',
              color: 'white',
            },
          },
          '.inputLabel, .inputField': {
            color: 'white',
            '&:focus': {
              borderColor: 'blue',
            },
            '&::placeholder': {
              color: 'white',
            },
          }
    }}>
        <Typography variant="h5" component="h5" className="sub-heading" gutterBottom>
        	Any questions?
      	</Typography>
        <Typography variant="h5" component="h1" className="title" gutterBottom>
        	Let's talk today!
      	</Typography>
        <TextField
          label="Name"
          placeholder="Placeholder Name"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            className: 'inputLabel',
          }}
          InputProps={{
            className: 'inputField',
            classes: {
              notchedOutline: 'focused',
            },
          }}
        />
        <TextField
          label="Email"
          placeholder="Placeholder Email"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            className: 'inputLabel',
          }}
          InputProps={{
            className: 'inputField',
            classes: {
              notchedOutline: 'focused',
            },
          }}
        />
		<TextareaAutosize
		  aria-label="Message"
		  placeholder="Message"
		  minRows={5}
		  className="textArea"
		/>
        <Button variant="contained" className="button">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
