import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'kavin'},
    { id: '1', name: 'kishore' },
    { id: '2', name: 'lokesh' }
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers=(state) => state.users;

export default userSlice.reducer