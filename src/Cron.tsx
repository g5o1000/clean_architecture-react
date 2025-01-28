import { useEffect, useState } from "react";

function Cron() {
    const [number, setNumber] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        console.log('Se ejecuto')
        let timer: ReturnType<typeof setInterval> | undefined;


        if (isRunning) {
            timer = setInterval(() => {
                setNumber((prevCount) => prevCount + 1)
            }, 100)    
        }

        return () => {
            if (timer) clearInterval(timer);
        }
    }, []);

    return (
        <>
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Cronometro</h1>
            <h2>{number}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
                { isRunning ? "Pausar" : "Reanudar" }
            </button>
            <button onClick={() => setNumber(0)}>Resetear</button>
        </div>
        </>
    );
};

export default Cron;