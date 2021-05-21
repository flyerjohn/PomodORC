function calculateTimer(timeInSeconds: number): Array<number|string>{
    let hours: number = Math.floor(timeInSeconds / 3600);
    let minutes: number = Math.floor((timeInSeconds -(hours * 3600)) / 60);
    let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);

    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
        minutesFormat,
        secondsFormat
    ];
}

export default calculateTimer;