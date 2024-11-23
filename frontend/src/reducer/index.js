import {combineReducers}  from "@reduxjs/toolkit"

//import slices
import profileSlice from "../slices/profileSlice";
import userSlice from "../slices/userSlice";
import blogSlice from "../slices/blogSlice";
import petFormSlice from "../slices/petFormSlice";
import locationSLice from "../slices/locationSlice"

const rootReducer = combineReducers({
    profile : profileSlice,
    user : userSlice,
    blog : blogSlice,
    petForm : petFormSlice,
    location : locationSLice
})

export default rootReducer;