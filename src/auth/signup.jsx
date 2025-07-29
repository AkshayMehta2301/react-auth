import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const initState = {
        email : '',
        password: '',
        roles:['USER']
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


    const handleSignUp = async () => {
        const resp = await axios.post('http://localhost:8082/library-management/users/auth/signup', user);
        console.log(resp);
        // TODO
    }

    return (
        <>
            <input type="text" placeholder="Enter your email" className="form-control my-3" value={user.email} onChange={handleChange} name='email'/>
            <input type="text" placeholder="Enter your password" className="form-control my-3" value={user.password} onChange={handleChange} name='password'/>
            <button onClick={handleSignUp} className="btn btn-primary">Sign Up</button>
        </>
    )
}

export default Signup;