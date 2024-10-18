import {combineReducers}  from "@reduxjs/toolkit"

//import slices
import profileSlice from "../slices/profileSlice";
import userSlice from "../slices/userSlice";
import blogSlice from "../slices/blogSlice";

const rootReducer = combineReducers({
    profile : profileSlice,
    user : userSlice,
    blog : blogSlice
})

export default rootReducer;