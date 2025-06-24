import { useState } from "react"

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        clearForm();
        alert(`Username: ${username} Password: ${password}`);
    }

    const clearForm = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Enter your username: 
                    <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} name="username" id="username" required/>
                </label>
                <label htmlFor="password">
                    Enter your password:
                    <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} name="password" id="password" required/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default LoginForm