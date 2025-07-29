import {createSlice} from '@reduxjs/toolkit'

const toastSlice = createSlice({
    name:'toast',
    initialState:{
        message:'',
        type:'',
    },
    reducers:{
        settoast(state, action){
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        cleartoast(state){
            state.message = '',
            state.type = ''
        }
    }
})

export const {settoast, cleartoast} = toastSlice.actions
export default toastSlice.reducer