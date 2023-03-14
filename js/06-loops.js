
// Read a number and check if that number is prime
// Start with unit testing:

// Unit Testing

// var num = 124
// var res = isPrime(num)
// console.log('INPUT:', num, 'EXPECTED: false, ACTUAL:' + res)

// num = 5915587277
// res = isPrime(num)
// console.log('INPUT:', num, 'EXPECTED: true, ACTUAL:' + res)

// num = 1
// res = isPrime(num)
// console.log('INPUT:', num, 'EXPECTED: false, ACTUAL:' + res)

function isPrime(num) {
    // console.log('num', num)
    if (num < 2) return false

    var divider = 2
    var limit = Math.sqrt(num)

    while (divider <= limit) {
        // console.log('divider', divider)
        if (num % divider === 0) {
            // console.log(num + ' is not prime ' + divider)
            return false
        }
        divider++
    }
    return true
}



















































