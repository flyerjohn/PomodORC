import React, { MouseEventHandler, useEffect, useState } from 'react';
import './Controlsss.css';
import { IoPlayOutline, IoPauseOutline, IoRepeatOutline } from 'react-icons/io5';


type Props = {
    setTimeInSeconds: Function,
    timeInSeconds: number,
    playButton: MouseEventHandler<HTMLButtonElement>,
    stopButton: MouseEventHandler<HTMLButtonElement>,
    resetButton: MouseEventHandler<HTMLButtonElement>,
};

const Controls = (props:Props) => {
    const { setTimeInSeconds } = props;
    const {playButton} = props;
    const {stopButton} = props;
    const {resetButton} = props;

    /*const { setTimeInSecondsDescanso } = props;*/
    const [intervalId, setIntervalId] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    return (
        <div className='controls-container'>
            <button onClick={playButton} disabled={running}><IoPlayOutline /></button>
            <button onClick={stopButton}><IoStopOutline /></button>
            <button onClick={resetButton} disabled={running}><IoRepeatOutline /></button>
        </div>
    );
}


export default Controls;