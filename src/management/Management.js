import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    password: '',
}

export const Management = createSlice({
    initialState,
    reducers: {
        setPassword: (state, acticon) => {
            state.password = acticon.payload;
        },
    }
})


export const { setPassword } = Management.actions

export default Management.reducer