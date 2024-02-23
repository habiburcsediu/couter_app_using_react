
import React, {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    const decreament = () => {
        setCount(count - 1);
    }

    const increament = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter_container'>
            <h2 className='counter_title'>Counter App</h2>
            <p className='counter_display'>{count}</p>
            <button className='counter_btn' onClick={decreament}>Decreament</button>
            <button className='counter_btn' onClick={reset}>Reset</button>
            <button className='counter_btn' onClick={increament}>Increament</button>
        </div>
    );
}

export default Counter;