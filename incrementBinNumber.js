function incrementBinaryNumber(number, requests) {
    let output = []
    let count = 0;
    let bin = 0;
    for (let i = 0; i < requests.length; i++) {
        if (requests[i] === '?') {
            count = number.split('').filter(x => x === '1').length;
            output.push(count);
        } else if (requests[i] === '+') {
            bin = parseInt(number, 2);
            bin++;
            number = bin.toString(2);
            console.log(number)
        } else {
            console.log('')
        }
    }
    return output;
}

console.log(incrementBinaryNumber('1101', ['?', '+', '?', '+', '?', '+', '?']))