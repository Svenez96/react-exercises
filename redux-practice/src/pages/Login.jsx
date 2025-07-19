import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: 'user@example.com',
        password: '1234'
    });

    const handleInput = ({ target: { name, value } }) => {
        setForm((f) => ({
            ...f,
            [name]: value,
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const result = {
            user: {
                id: '1fhc2gbh43r34hj',
                first_name: 'John',
                last_name: 'Wick',
                email: 'user@example.com'
            },
            token: '2re3yiuv23rujb23.fgyuihri2v3riyu3.fyir2fvryuifv32yiu'
        }

        dispatch(login(result));
        navigate('/dashboard')
    }

    return (
        <>
            <div className="flex items-center justify-center p-10 bg-gray-100 w-[300px] rounded-2xl">
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={form.email} onInput={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={form.password} onInput={handleInput} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login