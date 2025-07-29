import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
const Verifyemail = () => {
    
    const {token} = useParams();
    const [a, seta] = useState(false)
    
    useEffect(() => {
        console.log(token)
        async function getdata() {
        const config = {
            headers:{
                'authorization':`${token}`,
            }
        }

        const res = await axios.post("http://localhost:8082/library-management/users/auth/verifyemail", {}, config);
        if(res.status === 200){
            seta(true)
            console.log("Email ID is verified")
        };
    }
    getdata()
    },[token])
    return (
        <>
            {a && <h1>Email ID is Verified</h1>}
        </>
    )
}

export default Verifyemail