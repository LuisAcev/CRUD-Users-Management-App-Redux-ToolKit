import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonGroup, Typography } from '@mui/material';
import LoupeIcon from '@mui/icons-material/Loupe';
import ModalWindow from '../updateComponente/ModalWindow';
import { useDeleteUsersMutation, useGetUsersQuery } from '../../store/api/usersApi';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function Ulist() {
    const navigate = useNavigate();



    // 
    const { data:state =[] } = useGetUsersQuery(  );  
     
     const[ deleteUsers ] = useDeleteUsersMutation();
     

  const handleNewUser = ()=>{
    navigate("/add" , {
      replace:true,
      });
  }


  return (
    
    <TableContainer component={Paper}>
            <Typography style= { { 
              
               alignItems: 'space-between', 
               backgroundColor: '#0b9c4e',
               borderRadius: 10,
               color: '#f5eceb',
               margin: 10 } }
               variant="h2" gutterBottom  align="center">
              LIST OF PEOPLE
            </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      
        <TableHead >
      
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center"> Name </StyledTableCell>
            <StyledTableCell align="center"> Email </StyledTableCell>
            <StyledTableCell align="center"> Gender </StyledTableCell>
            <StyledTableCell align="center"> Status </StyledTableCell>
            <StyledTableCell align="center"> <Button variant="contained" color='primary'  startIcon={ <LoupeIcon/> } onClick={ handleNewUser }>  New User </Button> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center"> 
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                     <ModalWindow users = { row }/> {/*send all user to modal window  */}
                   
                    <Button variant="contained" 
                            color="error"  
                            startIcon={ <DeleteIcon/> } 
                            onClick={ ()=> {deleteUsers ( row.id )}}>
                            Delete</Button>
               </ButtonGroup>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}

export default Ulist;
