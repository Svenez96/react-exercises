import { useState } from "react"

const TextInput = () => {
    const [input, setInput] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <div>
                <label>
                    Type anything:
                    <input type="text" onInput={handleInput} value={input} name="input" id="input" />
                </label>
                <p>Value: {input}</p>
            </div>
        </>
    )
}

export default TextInput