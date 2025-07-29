import { useEffect } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setauth } from "../slice/auth_slice"

const Authprovider = ({children}) => {

    const token = localStorage.getItem('token')
    const dispatch = useDispatch();
    useEffect(() => {
        async function getdata (){
            const config = {
                headers:{
                    'authorization':`Bearer ${token}`,
                }
            }

            

            const resp = await axios.get("http://localhost:8082/library-management/user/me", config)
            
            dispatch(setauth(resp.data))
        }
        getdata();
    
    }, [token])
    return (
        <>
            {children}
        </>
    )

}

export default Authprovider;