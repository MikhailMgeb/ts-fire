// type CheckValidation = (value: string, callback: (value: string) => boolean) => boolean;

// const input: string | null = prompt('введите пароль?');

// function checkInput(value: string): boolean {
//     if (value[0] === value[0].toUpperCase()) {
//         return true;
//     }
//     return false;
// }

// const validator: CheckValidation = (input, checkInput) => {
//     if(checkInput(input)){
//         return true
//     }
//     return false
// }

// if(typeof input === 'string'){
//     validator(input,checkInput);
// }

type DelayCall = (callback: () => void, timeout: number) => void;

const timeDelay: number = Number(prompt('напиши время задержки консоля?'));


function generationNumber() {
    setTimeout(() => {
        console.log('таймер прошел');
    }, timeDelay);
}

const userDelayTimer: DelayCall = function (timer, timeDelay) {
    timer();
    console.log('закончилось выполнение функции userDelayTimer c задеркой ' + timeDelay);
}

if (typeof timeDelay === 'number') {
    userDelayTimer(generationNumber, timeDelay)
}