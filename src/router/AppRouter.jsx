import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import AddUser from "../components/addUserComponents/AddUser";
import UserList from "../components/userListComponent/UsersList";

const AppRouter = () => {
  return (
    // direccion local
     <HashRouter >
     {/* <HashRouter basename="/LuisAcev/CRUD-Users-Management-App-Redux-ToolKit"> */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
