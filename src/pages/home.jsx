import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const {auth, user} = useSelector((state) => state.auth)
    return (

        <>
            {auth && (<>
                <div>{user.userId}</div>
                <div>{user.username}</div>
            
            </>)}
            <button onClick={() => navigate('/add-book')}>Add Book</button>
            <button onClick={() => navigate('/list-book')}>List Books</button>
        </>
    )
}

export default Home