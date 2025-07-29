import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const initState = {
        email:''
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

    const handleForgotPassword = async () => {
        const resp = await axios.post('http://localhost:8082/library-management/users/auth/forgotpassword', user);
        console.log(resp);
    }

    return (
        <>
            <input type="email" placeholder="Enter your Email" className="form-control my-3" value={user.email} onChange={handleChange} name='email'/>
            
            
            
            <button onClick={handleForgotPassword} className="btn btn-primary">Send Link</button>
        </>
    )
}

export default ForgotPassword;