import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

const Resetpassword = () => {

    const {token } = useParams()
    const initState = {
        newPassword: '',
        confirmPassword: ''
    }

    const [user, setUser] = useState(initState);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlereset = async () => {
        const config = {
            headers:{
                'authorization':`${token}`
            }
        }
        const resp = await axios.post('http://localhost:8082/library-management/users/auth/reset', user, config);
        if(resp.status === 200){
            
            navigate('/login')
            console.log(`Password change successfully`);
        }
        // TODO
    }

    return(
        <>
            <input type="text" placeholder="Enter your password" className="form-control my-3" value={user.newPassword} onChange={handleChange} name='newPassword'/>
            <input type="password" placeholder="Enter your password" className="form-control my-3" value={user.confirmPassword} onChange={handleChange} name='confirmPassword'/>
            <button className="btn btn-primary" onClick={handlereset}>Reset Password</button>

        </>
    )
}

export default Resetpassword;