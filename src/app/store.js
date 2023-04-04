import { configureStore } from '@reduxjs/toolkit'
import Management from '../components/Management'

export const store = configureStore({
    reducer: {
        loginControl: Management,
    },
})