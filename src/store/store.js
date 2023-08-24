
import { handleUsersApi } from "./api/usersApi";


const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {

        //userSlice:userSlices,
        [handleUsersApi.reducerPath]: handleUsersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(handleUsersApi.middleware),
  })