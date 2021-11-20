function countArithmeticMean(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {

        let x = a[i + 1]
        let y = a[i - 1]
        if (i === 0) {
            y = 0
        }
        if (i === a.length - 1) {
            x = 0;
        }


        if ((x + y) === (a[i] * 2)) {
            count++
        } else if (a.length === 1) {
            count = 1;
        }
    }
    return count;
}

console.log(countArithmeticMean([0]))