
// Read a 5 digits number and check if it symmetric,
// add unit testing

var num = 34543
var res = isSymmetric(num)
console.log('INPUT:', num, 'EXPECTED: true, ACTUAL:' + res)

// var num = 34563
// var res = isSymmetric(num)
// console.log('INPUT:', num, 'EXPECTED: false, ACTUAL:' + res)


function isSymmetric(num) {
    console.log('num', num)
    var length = 5
    var divider = 10 ** (length - 1)
    console.log('divider', divider)

    while (num > 9) {

        var rightDigit = num % 10
        console.log('rightDigit', rightDigit)
        var leftDigit = parseInt(num / divider)
        console.log('leftDigit', leftDigit)

        if (rightDigit !== leftDigit) return false

        // remove right digit:
        num = parseInt(num / 10)
        console.log('num', num)
        divider /= 10
        console.log('divider', divider)

        // remove left digit:
        num = num - leftDigit * divider
        console.log('num', num)
        divider /= 10
        console.log('divider', divider)
    }
    return true

}

