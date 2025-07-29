import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <div className="my-4">
            <Link to="/" className="mx-3">Sign up</Link>
            <Link to="/login" className="mx-3">Login</Link>
            <Link to="/forgot-password" className="mx-3">Forgot Password</Link>
            <button onClick={() => localStorage.removeItem('token')}>Logout</button>
            </div>

        </>
    )
}

export default Header;