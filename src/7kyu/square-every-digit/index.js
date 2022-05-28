export function squareDigits(num){
    let concat = '';

    const numString = num.toString();

    for (let index = 0; index < numString.length; index++) {
        let value = Math.pow(parseInt(numString[index], 10), 2).toString();
        concat += value;
    }

    return parseInt(concat, 10);
}