import React from 'react'
import Box from '@mui/material/Box';
import Form from './Form';
import { Typography } from '@mui/material';


export default function AddUser() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column',   alignItems: 'center',   justifyContent: 'center'}}>
            <Typography style= { { 
              
              alignItems: 'space-between', 
              backgroundColor: '#86d199',
              borderRadius: 10,
              color: '#f5eceb',
              marginTop: 30,
              padding:10 } }
              variant="h2" gutterBottom  align="center">
               NEW USER
           </Typography>
      <Box
        my={2}
        sx={{
          display: 'flex',
          m: 2,
          p: 8,
          width:'50%',
          justifyContent: 'center',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#86d199'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '4px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 10,
          fontSize: '0.875rem',
          fontWeight: '700',
          
        }}
      >
        { Form() }
      </Box>
    </div>
  );
}


 