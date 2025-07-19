import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
            <div>
                <div>
                    {user.first_name} {user.last_name}
                </div>
                <span style={{ cursor:'pointer' }} onClick={handleLogout}>Logout</span>
            </div>    
        </nav>
    )
}

export default Navbar