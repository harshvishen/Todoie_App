import React, { useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(15);

    return (
        <div>
        <p>count Component - {count}</p>
        <button onClick={() => setCount(count +1)}>Increment</button>
        </div>
    );
};

export default CounterComponent;   