import { useEffect, useState } from "react";
import { useCounter } from "../contexts/CounterContext";

const CounterComponent: React.FC = () => {
    const counterService = useCounter();
    const [counter, setCounter] = useState<number>(counterService.getCounterValue());

    useEffect(() => {
        setCounter(counterService.getCounterValue());
    }, [counterService])

    const increment = () => {
        counterService.increment();
        setCounter(counterService.getCounterValue());
    }

    const decrement = () => {
        counterService.decrement();
        setCounter(counterService.getCounterValue());
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;