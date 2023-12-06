/* Write a function to remove all duplciate letters from a provided string. 
The string will only contail lowercase letters between a - z. The string will not contain spaces. */

function makeUnique(str) {
    let countedChars = []
    let newStr = ""

    for (let i = 0; i < str.length; i++) {

        /* If string of counted letters does not contain the current char being looped over add the current char 
        being looped over to the new string to be returned */
        if (!countedChars.includes(str[i])) {
            newStr += str[i]
        }
        // Adds current char being looped over to the counted Chars array
        countedChars.push(str[i])
    }
    return newStr
}
console.log(makeUnique('helloworld'))
// helowrd
console.log(makeUnique('iwanttoclimbamountain'))
// iwantoclmbu
console.log(makeUnique('loop'))
// lop
