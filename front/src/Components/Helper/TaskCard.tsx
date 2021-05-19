import React, {useEffect, useState} from 'react';

import calculateTimer from '../../Components/Helper/CalculateTime';
import Controls from '../../Components/Controls';

interface TaskCardProps {
    name: string,
    id: string
}

const TaskCard = ({name,id} : TaskCardProps) => {

    const [timeArray, setTimerArray] = useState<Array<number|string>>([]);
    const [timeInSeconds, setTimeInSeconds] = useState<number>(1500);
    /*const [timeInSecondsDescanso, setTimeInSecondsDescanso] = useState<number>(300);*/

    useEffect(() => { 
        let timeArray: Array<number|string> = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    },[timeInSeconds]);

    return (
        <div className='card-wrapper' key={id}>
                        <div className='card'>
                            <div className='card-task'>
                            <h2>
                               {name}
                             </h2>

                            <div className='timer-container'>

                             <h2 className='timer-text'>{timeArray[0]}</h2>
                             <span>:</span>
                             <h2 className='timer-text'>{timeArray[1]}</h2>

                            </div>

                            <Controls setTimeInSeconds={setTimeInSeconds} />

                            </div>
                        </div>
                    </div>
    );
}

export default TaskCard;