function calculateTimer(timeInSeconds: number/*, timeInSecondsDescanso: number*/): Array<number|string>{
    let hours: number = Math.floor(timeInSeconds / 3600);
    let minutes: number = Math.floor((timeInSeconds -(hours * 3600)) / 60);
    let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);

    /*let minutesDescanso: number = Math.floor((timeInSecondsDescanso -(hours * 3600)) / 60);
    let secondsDescanso: number = timeInSecondsDescanso - (hours * 3600) - (minutes * 60);*/

    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
        minutesFormat,
        secondsFormat
    ];
}

export default calculateTimer;