import React, { useEffect, useState } from 'react';
import ControlsDescanso from '../ControlsDescanso';
import calculateTimer from '../../Components/Helper/CalculateTime';
import Controls from '../../Components/Controls';

interface TaskCardProps {
    name: string,
    id: string
}

const TaskCard = ({ name, id }: TaskCardProps) => {

    const [timeArray, setTimerArray] = useState<Array<number | string>>([]);
    const [timeInSeconds, setTimeInSeconds] = useState<number>(5);
    const [timeInSecondsDescanso, setTimeInSecondsDescanso] = useState<number>(300);
    const [intervalId, setIntervalId] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);


    const handlePlayButton = () => {
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) =>
                previousState - 1);
        }, 1000);

        setIntervalId(interval);
        setRunning(false);
        clearInterval(intervalId);
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

    useEffect(() => {
        if (timeInSeconds === 0) {
            setTimerArray([timeArray[3], timeArray[3]]);
        }
        if (timeInSeconds === -1) {
            clearInterval(intervalId);
            setTimeInSeconds(5);
        }
         else {
            let timeArray: Array<number | string> = calculateTimer(timeInSeconds, timeInSecondsDescanso);
            setTimerArray(timeArray);
        }
        console.log(timeInSeconds);
    }, [timeInSeconds, timeInSecondsDescanso]);

    return (
        <div className='card-wrapper' key={id}>
            <div className='card'>
                <div className='card-task'>
                    <h2>
                        {name}
                    </h2>

                    <section className='main-container'>

                        <div className='timer-container'>

                            <h2 className='timer-text'>{timeArray[0]}</h2>
                            <span>:</span>
                            <h2 className='timer-text'>{timeArray[1]}</h2>

                        </div>

                        <Controls
                            playButton={handlePlayButton}
                            resetButton={handleResetButton}
                            stopButton={handleStopButton}
                            setTimeInSeconds={setTimeInSeconds}
                            timeInSeconds={timeInSeconds}
                        />

                        <h2>
                            {timeInSeconds == 0 ? <ControlsDescanso
                                setTimeInSecondsDescanso={setTimeInSecondsDescanso} /> : null}
                        </h2>

                    </section>

                </div>
            </div>
        </div>
    );
}

export default TaskCard;