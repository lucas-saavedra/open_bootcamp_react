/**
 * Entregable del ejercicio de las sesiones 10,11,12 OpenBootcamp
 */
import { useState } from "react";

const Entregable = () => {

    const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 })
    const [intervalId, setIntervalId] = useState(null);

    const handleStart = () => {
        if (!intervalId) {
            const intervalIdtemp = setInterval(() => {
                const randomRgb = {
                    r: Math.floor(Math.random() * 257),
                    g: Math.floor(Math.random() * 257),
                    b: Math.floor(Math.random() * 257)
                }
                setRgb({ ...randomRgb });
            }, 1000)
            setIntervalId(intervalIdtemp)
        }
    }
    const handleStop = () => {
        clearInterval(intervalId)
        setIntervalId(null)
    }

    const boxStyle = {
        height: '250px',
        width: '250px',
        backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b})`

    };

    return (
        <div className="h-100 d-flex align-items-center">
            <div
                onDoubleClick={handleStop}
                onMouseOver={handleStart}
                onMouseLeave={handleStop}
                style={boxStyle}
                className=" mx-auto">
            </div>
        </div >
    )
}

export default Entregable