import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Signup from "../auth/signup";
import Login from "../auth/login";
import ForgotPassword from "../auth/forgot-password";
import Enduser from "../layout/enduser";
import Verifyemail from "../auth/verifyemai";
import Resetpassword from "../auth/reset-password";
import Home from "../pages/home";
import AddBook from "../pages/add-book";
import ListBook from "../pages/list-book";
import ProtectedRoute from "../utils/protected";
import { useEffect } from "react";
import {useSelector} from 'react-redux'

const AuthRoutes = () => {
    const auth = useSelector((state) => state.auth.auth)

    // useEffect(() => {
    //     console.log(auth)
    // },[auth])

    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={<Enduser/>} >
                <Route path="/signup" element={ <Signup/>}/>
                <Route path="/login" element={!auth ? <Login/> : <Navigate to="/"/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/verify-email/:token" element={<Verifyemail/>} />
                <Route path="/reset-password/:token" element={<Resetpassword/>}/>
                
                <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/add-book" element={<ProtectedRoute><AddBook/></ProtectedRoute>} />
                <Route path="/list-book" element={<ListBook/>} />
                
            </Route>
        </Routes>
    );
}

export default AuthRoutes;