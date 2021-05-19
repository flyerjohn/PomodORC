import React, { useState } from 'react';
import './Controlsss.css';

type Props = {
    setTimeInSeconds: Function
    /*setTimeInSecondsDescanso: Function*/
};

const Controls = (props:Props) => {
    const { setTimeInSeconds } = props;
    /*const { setTimeInSecondsDescanso } = props;*/
    const [intervalId, setIntervalId] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    
    const handlePlayButton = () => {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => 
            previousState - 1);
            if (intervalId === 0) 
            {  /*setTimeInSecondsDescanso((previousState:number) => 
                previousState - 1);
                setTimeInSeconds = useState<number>(10);*/
                console.log('deu bom parceiro');
            } 
        }, 1000);

        setIntervalId(interval);
        setRunning(true);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
        setRunning(false);
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(1500);
        setRunning(false);
    }
    

    return (
        <div className='controls-container'>
            <button onClick={handlePlayButton} disabled={running}>Play</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    );
}


export default Controls;