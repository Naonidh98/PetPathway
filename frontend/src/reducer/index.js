import {combineReducers}  from "@reduxjs/toolkit"

//import slices
import profileSlice from "../slices/profileSlice";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
    profile : profileSlice,
    user : userSlice
})

export default rootReducer;