import { Outlet } from 'react-router-dom'
import Navbar from "../components/dashboard/Navbar"

const PrivateLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default PrivateLayout