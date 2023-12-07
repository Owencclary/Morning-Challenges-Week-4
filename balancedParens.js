/* Given a string, return true or false depending on whether that string has balanced parentheses.
For the purposes of this problem, you only need to worry about parentheses ( and ), 
not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets. */
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function balancedParens(str) {
    let parenCounterClosed = 0;
    let parenCounterOpen = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] === '(') {
            parenCounterOpen++
        }   
        if (str[i] === ')') {
            parenCounterClosed++
        }
    }
    // After the the for loop return true or false if parenCounter is unbalanced or balanced
    if (parenCounterOpen === parenCounterClosed) {
        return true
    } else {
        return false
    }
}
console.log(balancedParens("This ( is unbalanced."))
console.log(balancedParens("(This (is (a) balanced) string.)"))
console.log(balancedParens("This is () also ) unbalanced."))
console.log(balancedParens("Balanced."))
