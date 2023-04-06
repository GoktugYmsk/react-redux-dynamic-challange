import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    password: '',
    user: '',
    approval: false,
    handleClick: (''),
    main: false,
    activeBar: true,
    open: false,
    userPassword: '',
    userName: '',
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
        setHandleClick: (state, acticon) => {
            state.handleClick = acticon.payload;
        },
        setMain: (state) => {
            state.main = true
        },
        setActiveBar: (state) => {
            state.activeBar = true
        },
        setOpenLogin: (state) => {
            state.open = false
        },
        setUserPassword: (state, acticon) => {
            state.userPassword = acticon.payload;
        },
        setUserName: (state, acticon) => {
            state.userName = acticon.payload;
        },

    }
})


export const { setPassword, setUser, setApproval, setHandleClick, setMain, setActiveBar, setOpenLogin,setUserPassword,setUserName } = Management.actions

export default Management.reducer