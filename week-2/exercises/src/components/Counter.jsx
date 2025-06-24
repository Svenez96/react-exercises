import { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((_counter) => {
          return _counter +1
        })
      }

    const decrementCounter = () => {
        setCounter((_counter) => {
          return _counter -1
        })
      }

    const resetCounter = () => {
        setCounter(0)
      }

    useEffect(() => {
        document.title = `${counter}`
    }, [counter])

    return (
        <>

        <div>
            <p>Count: {counter}</p>
        </div>
        <div>
            <button onClick={incrementCounter}>Add</button>
        </div>
        <div>
            <button onClick={decrementCounter}>Subtract</button>
        </div>
        <div>
            <button onClick={resetCounter}>Reset</button>
        </div>

        </>  
    )
}

export default Counter