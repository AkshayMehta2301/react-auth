import { Children, useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";
const ProtectedRoute = ({children}) => {
    
    const  auth = useSelector((state) => state.auth.auth) 
    const navigate = useNavigate()
    const [res, setres] = useState(null)
    // const auth = useSelector((state) => state.auth.auth)
    
    useEffect(() => {
        if(!auth){
            setres('/login')
        }
        console.log(auth)
    },[auth])

    if(res) return <Navigate to={res}/>

    

    return children
        
    
}

export default ProtectedRoute