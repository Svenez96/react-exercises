import { useRef } from "react"

const UncontrolledInput = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value)
    }

    return (
        <>
            <input type="text" ref={inputRef} placeholder="type anything" />
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UncontrolledInput