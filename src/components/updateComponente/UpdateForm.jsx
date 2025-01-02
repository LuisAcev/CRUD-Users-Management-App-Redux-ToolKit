import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import { useUpdateUsersMutation } from '../../store/api/usersApi';

export default function UpdateForm( { users, setOpen } ) {

  const [ UpdateUsers ] = useUpdateUsersMutation();
  
  const[ user, setUser ] = useState (
    {
      id:      users.id,
      name:    users.name,
      email:   users.email,
      gender:  users.gender,
      status:  users.status // active or inactive
    });

  const {id, name, email, gender, status} = user
  const handleInputChange = ( e ) =>{
    e.preventDefault();
    setUser({ ...user, [e.target.name]:e.target.value })
     
  }   

  // POST the object inside user

    const handleSubmit =(e)=>{
      e.preventDefault();
      UpdateUsers( user, id )
       setOpen(false);
          
     }

    return (
      
      <form  onSubmit={ handleSubmit }>
            <Box sx={{
            display: 'flex',
            flexDirection: 'column',
           '& .MuiTextField-root': { m: 1, width: '25ch' },
             
            }}
            >  

                <TextField
                error = {false}
                disabled={true}
                required 
                color='info'
                id="outlined-error-helper-text"
                label="ID"
                name='id'
                value={  users.id }
                style={{ width: 400, background: '#cce0d1',borderRadius: 15 }}
                onChange= { handleInputChange }
                variant ='outlined'
              />

              <TextField
                error = {false}
                required 
                color='info'
                id="outlined-error-helper-text"
                label="Name"
                name='name'
                value={ name }
                style={{ width: 400, background: '#cce0d1',borderRadius: 15 }}
                onChange= { handleInputChange }
                variant ='outlined'
              />
                
              <TextField
                error = {false}
                required
                color='info'
                id="outlined-error-helper-text"
                label="Email"
                name='email'
                value={ email }
                style={{ width: 400, background: '#cce0d1',borderRadius: 15  }}
                onChange= { handleInputChange }
                variant ='outlined'
               />

               <TextField
                  error = {false}
                  required
                  color='info'
                  id="outlined-error-helper-text"
                  select
                  label="Gender"
                  name='gender'
                  placeholder={ gender }
                  value={ gender }
                  style={{ width: 400, background: '#cce0d1',borderRadius: 15  }}
                  onChange= { handleInputChange }
                  variant ='outlined'
                  >

                  {<MenuItem value={ "female" }> Female </MenuItem>}
                  {<MenuItem value={ "male"   }> Male   </MenuItem>}

                </TextField>

                <FormControl></FormControl>
                <TextField
                  error = {false}
                  required
                  color='info'
                  id="outlined-error-helper-text"
                  select
                  label="Status"
                  name='status'
                  placeholder={ status }
                  value={ status }
                  style={{ width: 400, background: '#cce0d1',borderRadius: 15  }}
                  onChange= { handleInputChange }
                  variant ='outlined'
                >

                  {<MenuItem value={ "Active" }>    Active </MenuItem>}
                  {<MenuItem value={ "inactive" }>  Inactive   </MenuItem>}

                </TextField>

                <Button type='submit'  variant="contained" disableElevation
                        color="success"
                        style={{ margin:'0 auto', width: 200, alignContent: 'center' }}
                        >                         
                  Submit
                </Button>

          </Box>
      </form>
    );
  }
  