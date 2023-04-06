import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    password: '',
    user: '',
    approval: false,
    handleClick: (''),
    main: false,
    activeBar: true, 
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
        },

        setMain: ( state) =>{
            state.main = true
        },
        setActiveBar: ( state) =>{
            state.activeBar = true
        }
    }
})


export const { setPassword, setUser,setApproval,setHandleClick,setMain,setActiveBar } = Management.actions

export default Management.reducer