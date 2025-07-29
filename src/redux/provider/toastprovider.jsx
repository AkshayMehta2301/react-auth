import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'
import { cleartoast } from '../slice/toast_slice'
const ToastProvider = ({children}) => {
    const dispatch = useDispatch()
    const toastmsg = useSelector((state) => state.toast)
    useEffect(() => {
        if(toastmsg.message && toastmsg.type){
            toast[toastmsg.type](toastmsg.message,{
                position:'bottom-center',
                autoClose:1000,
                closeOnClick:true,
                pauseOnHover:true,
                onclose:() => dispatch(cleartoast())

            }
                            
            )
        }
    },[toastmsg])

    

    return (
        <>
            {children}
            <ToastContainer/>
        </>
    )
}

export default ToastProvider