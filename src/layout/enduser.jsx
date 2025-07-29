import { Outlet } from 'react-router-dom';
import Header from '../componant/header';
const Enduser = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Enduser;