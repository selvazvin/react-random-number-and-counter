import { useState } from "react"



function Counter()
{
    let [count,setCount] = useState(0)
    function add()
    {
        setCount(count+1)
    }
    function dec()
    {
        setCount(count-1)
    }
    return (
        <div className="counter">
            <div className="counter__title"><h1>Counter</h1></div>
            <div className="counter__container">
                <button onClick={dec}>-</button>
                <h1>{count}</h1>            
                <button onClick={add}>+</button></div>
            </div>
    )
}

export default Counter