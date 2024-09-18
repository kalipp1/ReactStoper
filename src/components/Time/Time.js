import styles from './Time.module.scss'
import Button from '../Button/Button';
import { useState } from "react";
import { useEffect } from "react";

const Time = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);

    const milliseconds = time % 100;
    const seconds = Math.floor((time % 6000) / 100);
    const minutes = Math.floor((time % 360000) / 6000);
    const hours = Math.floor(time / 360000);

    useEffect(() => {
        return () => {
           if(timer) clearInterval(timer);
        };
      }, []);

      const start = () => {
        if(!timer){
          setTimer(setInterval(() => {
            setTime(prevValue => prevValue + 1);
          }, 1))  
        }
      };

      const stop = () => {
        clearInterval(timer);
        setTimer(null);
      }

      const reset = () => {
        clearInterval(timer);
        setTime(0);
      }

    return (
        <div className={styles.stopperDisplay}>
            <p className={styles.stopperNumber}>{hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}</p>
            <div className={styles.buttons}>
            <Button action={start}>Start</Button>
            <Button action={stop}>Stop</Button>
            <Button action={reset}>Reset</Button>
            </div>
        </div>
    );
};

export default Time;