import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  UpdateForm  from './UpdateForm.jsx';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow( { id, name, email, gender, status, setChange } ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
    <div>
      <Button onClick={ handleOpen } variant="contained" color='success'> Update </Button>
      <Modal
        open={open}
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} 
              style= {{ borderRadius: 15 }} >
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            { <UpdateForm idUpdate={id} nameUpdate={name} emailUpdate={email} genderUpdate={gender} statusUpdate={status} setOpen= { setOpen } setChange = {setChange}/> }
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}