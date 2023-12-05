function printDigits(num) {
    let newNum = 0;

    while (num > 0) {
        let temporaryNum = num % 10;
        newNum = newNum * 10 + temporaryNum
        num = Math.floor(num / 10)
    }
    return newNum
}

console.log(printDigits(314))
console.log(printDigits(1))
console.log(printDigits(12))
console.log(printDigits(24314))