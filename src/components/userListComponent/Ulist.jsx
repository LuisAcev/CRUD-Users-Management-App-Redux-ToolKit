import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDeleteUsersMutation, useGetUsersQuery } from '../../store/api/usersApi';
import { Button, ButtonGroup } from '@mui/material';
import ModalWindow from '../updateComponente/ModalWindow';
import DeleteIcon from '@mui/icons-material/Delete';


export const Ulist = () => {

  const { data: state = [] } = useGetUsersQuery();
  const [deleteUsers] = useDeleteUsersMutation();

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name ',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'number',
      width: 110,
      editable: true,
    },
    
    {
      field: 'buttoms',
      buttoms: () => {
        return (

          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <ModalWindow users={rows} /> {/*send all user to modal window  */}

            <Button variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => { deleteUsers(rows.id) }}>
              Delete</Button>
          </ButtonGroup>
        )
      },
      headerName: 'Buttoms',
      width: 110,
      editable: true,
    },
  ];

  const rows = [...state];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </Box>
  );
}

export default Ulist;