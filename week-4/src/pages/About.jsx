import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia asperiores quas, hic sequi aliquid aut voluptate eveniet temporibus aliquam!</p>
                <button onClick={handleClick}>Home</button>
            </div>
        </>
    )
}

export default About