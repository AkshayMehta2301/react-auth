import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'auth',
    initialState:{
        auth:false,
        user:{}
    },
    reducers:{
        setauth(state, action){
            state.auth = true;
            state.user = action.payload
            // console.log(state.auth)
        },
        clearauth(state, action){
            state.auth = false;
            state.user = {}
        }
    }
})

export const {setauth, clearauth} = authSlice.actions
export default authSlice.reducer; 