import React from 'react'
import {  Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import AddUser from '../components/addUserComponents/AddUser'
import UserList from '../components/userListComponent/UsersList'





const AppRouter = () => {

  return (
    
    <BrowserRouter>

      <Routes>
        <Route path= "/"   element = { <UserList />} />
        
        <Route path= "/add" element = {<AddUser /> } />

        <Route path='*' element={<Navigate to="/" />} /> 

      </Routes>
            
    </BrowserRouter>

  )
}

export default AppRouter