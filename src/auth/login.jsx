import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setauth } from "../redux/slice/auth_slice";
import { settoast } from "../redux/slice/toast_slice";

const Login = () => {

    const initState = {
        email : '',
        password: ''
    }

    const dispatch = useDispatch()
    

    const [user, setUser] = useState(initState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogin = async () => {
        const resp = await axios.post('http://localhost:8082/library-management/users/auth/login', user);
        if(resp.status === 200){
            localStorage.setItem('token', resp.data.token)
            console.log(resp.data.user)
            dispatch(setauth(resp.data.user))

            navigate('/home')
            dispatch(settoast({message:'Login successfull', type:"success"}))
        }
        // TODO
    }

    return (
        <>
            <input type="text" placeholder="Enter your email" className="form-control my-3" value={user.email} onChange={handleChange} name='email'/>
            
            <input type="text" placeholder="Enter your password" className="form-control my-3" value={user.password} onChange={handleChange} name='password'/>
            
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </>
    )
}

export default Login;