import { configureStore } from "@reduxjs/toolkit";
import authreducer from './slice/auth_slice'
import toastReducer from './slice/toast_slice'

const store = configureStore({
    reducer:{
        auth:authreducer,
        toast:toastReducer

    }
})

export default store