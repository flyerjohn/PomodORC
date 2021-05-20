import React, { useEffect, useState } from 'react';
import calculateTimer from '../../Components/Helper/CalculateTime';
import Controls from '../../Components/Controls';

interface TaskCardProps {
    name: string,
    id: string
}

const TaskCard = ({ name, id }: TaskCardProps) => {
    
    const [timeArray, setTimerArray] = useState<Array<number | string>>([]);
    const [timeInSeconds, setTimeInSeconds] = useState<number>(5);
    const [intervalId, setIntervalId] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    var [count, setCount] = useState<number>(2);

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
        if (timeInSeconds === 0 && count === 2) {
            setTimerArray([timeArray[3], timeArray[3]]);
            clearInterval(intervalId);
            setTimeout(function () {
                alert("tempo de descanso");
                setTimeInSeconds(11);
                setCount(count- 1);
                setTimeInSeconds((previousState: number) =>
                    previousState - 1);
                    
            }, 1000);
            
            
        }
        if (timeInSeconds === -1 && count === 1) {
            setTimerArray([timeArray[3], timeArray[3]]);
            clearInterval(intervalId);
            setTimeout(function () {
                alert("fim do descanso");
                setTimeInSeconds(5);
                setCount(count+ 1);
                    
            }, 1000);
           
        }
        else {
            let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
            setTimerArray(timeArray);
        }
        console.log(timeInSeconds, count);
    }, [timeInSeconds, count]);

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

                    </section>

                </div>
            </div>
        </div>
    );
}

export default TaskCard;