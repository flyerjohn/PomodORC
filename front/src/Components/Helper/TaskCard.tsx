import React, { useEffect, useState } from "react";
import calculateTimer from "../../Components/Helper/CalculateTime";
import Controls from "../../Components/Controls";
import "../../Components/taskCard.css";
import api from "../../services/api";

interface TaskCardProps {
  name: string;
  id: string;
  setRestModal: Function;
  setEndRestModal: Function;
  setEditTaskModal: Function;
  checked: boolean,
  setTaskId: Function
}

const TaskCard = ({ name, id, setRestModal, setEndRestModal, checked, setEditTaskModal,setTaskId }: TaskCardProps) => {
  const [timeArray, setTimerArray] = useState<Array<number | string>>([]);
  const [timeInSeconds, setTimeInSeconds] = useState<number>(5);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const [count, setCount] = useState<number>(2);

  const changeChecked = async (_id: string) => {

    try {
      const res = await api.patch(`/tasks/${_id}`, {
        checked: isChecked,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState - 1);
    }, 1000);

    setIntervalId(interval);
    setRunning(false);
    clearInterval(intervalId);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(1500);
    setRunning(false);
  };

  useEffect(() => {
    if (timeInSeconds === 0 && count === 2) {
      setTimerArray([timeArray[3], timeArray[3]]);
      clearInterval(intervalId);
      setTimeout(function () {
        setRestModal(true);
        setTimeInSeconds(11);
        setCount(count - 1);
        setTimeInSeconds((previousState: number) => previousState - 1);
      }, 1000);
    }


    if (timeInSeconds === -1 && count === 1) {
      setTimerArray([timeArray[3], timeArray[3]]);
      clearInterval(intervalId);
      setTimeout(function () {
        setEndRestModal(true);
        setTimeInSeconds(5);
        setCount(count + 1);
      }, 1000);
    } else {
      let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
      setTimerArray(timeArray);
    }
    console.log(timeInSeconds, count);
  }, [timeInSeconds, count]);

  useEffect(() => {
    changeChecked(id);
  }, [isChecked])

  return (
    <>
    <div className="card-wrapper" key={id}>
     
      <div className="card" >
        <div className="card-task">
          <div className="row">
            <h2  onClick= {()=>{ setEditTaskModal(true); setTaskId(id)} }  className="card-title">{name}</h2>
           
            <input type="checkbox" className="checkBox" checked={isChecked} onChange={() => {
              setIsChecked(!isChecked);
            }} ></input>

          </div>
          <section className="main-container">
            <div className="timer-container">
              <h2 className="timer-text">{timeArray[0]}</h2>
              <span>:</span>
              <h2 className="timer-text">{timeArray[1]}</h2>
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
    </>
  );
};

export default TaskCard;
