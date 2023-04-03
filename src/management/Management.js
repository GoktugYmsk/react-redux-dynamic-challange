import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    password: '',
    user: '',
    approval: false,
    handleClick: (''),
}

export const Management = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPassword: (state, acticon) => {
            state.password = acticon.payload;
        },
        setUser: (state, acticon) => {
            state.user = acticon.payload;
        },
        setApproval: (state) => {
            state.approval = true;
        },
        setHandleClick: ( state,acticon) =>{
            state.handleClick = acticon.payload;
        }
    }
})


export const { setPassword, setUser,setApproval,setHandleClick } = Management.actions

export default Management.reducer