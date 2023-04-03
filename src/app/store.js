import { configureStore } from '@reduxjs/toolkit'
import Management from '../management/Management'

export const store = configureStore({
    reducer: {
        loginControl: Management,
    },
})