import { useSelector } from 'react-redux'

const Home = () => {
    const { token, user } = useSelector((state) => state.auth);

    return (
        <>
            <h1>Welcome, {user.first_name}</h1>
            <p>This is your authentication token: {token}</p>
        </>
    )
}

export default Home