import React, { useState } from 'react';
import './Controlsss.css';
import { IoPlayOutline, IoStopOutline, IoRepeatOutline } from 'react-icons/io5';

type Props = {
    setTimeInSecondsDescanso: Function
};

const Controls = (props:Props) => {
    const { setTimeInSecondsDescanso } = props;
    const [intervalId, setIntervalId] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    
    const handlePlayButton = () => {
        let interval:any = setInterval(() => {
            setTimeInSecondsDescanso((previousState:number) => 
            previousState - 1);
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
        setTimeInSecondsDescanso(300);
        setRunning(false);
    }
    

    return (
        <div className='controls-container'>
            <button onClick={handlePlayButton} disabled={running}><IoPlayOutline /></button>
            <button onClick={handleStopButton}><IoStopOutline /></button>
            <button onClick={handleResetButton}><IoRepeatOutline /></button>
        </div>
    );
}


export default Controls;