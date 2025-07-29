import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

    const initState = {
        oldPassword: '',
        newPassword : '',
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

    const handleChangePassword = async () => {
        //TODO change API path
        const resp = await axios.post('http://localhost:8082/library-management/users/auth/signup', user);
        console.log(resp.data);
    }

    return (
        <>
            <input type="text" placeholder="Enter your old password" onChange={handleChange} name='oldPassword'/>
            <br />
            <input type="password" placeholder="Enter your new password" onChange={handleChange} name='newPassword'/>
            <br />
            <input type="text" placeholder="Enter your confirm password" onChange={handleChange} name='confirmPassword'/>
            <br />
            <button onClick={handleChangePassword}>Change Password</button>
        </>
    )
}

export default ChangePassword;