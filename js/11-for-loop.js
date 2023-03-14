// Read 3 numbers and print: average, max, min (using a for loop)

// ex1()

function ex1() {

    var sum = 0
    var max = -Infinity
    var min = Infinity

    for (var i = 0; i < 3; i++) {

        var num = +prompt('Num?')
        console.log('num', num)
        sum += num
        if (num > max) max = num
        if (num < min) min = num

    }

    var avg = sum / 3
    console.log('avg', avg)
    console.log('max', max)
    console.log('min', min)

}


// Read the number of kids of the user, 
// then read the age for each kid, then print the youngest age.

// ex2()

function ex2() {

    var kidsNum = +prompt('How many? (bli ain hara)')
    // console.log('kidsNum', kidsNum)
    var minAge = 120

    for (var i = 0; i < kidsNum; i++) {
        var age = +prompt('Age?')
        // console.log('age', age)
        if (age < minAge) minAge = age
    }

    console.log('Youngest: ' + minAge + ' sheiye bari')
}


// Print the multiplication table

// printMultTable()

function printMultTable() {

    for (var i = 1; i <= 10; i++) {
        var line = ''
        for (var j = 1; j <= 10; j++) {
            line += i * j + '\t'
        }
        console.log(line)
    }
}


// Measure how much time it takes to sum many random numbers.

// console.time()
// var timeStart = Date.now()
// ex4()
// console.timeEnd()
// var timeEnd = Date.now()
// var diff = timeEnd - timeStart
// console.log('diff', diff, 'ms')

function ex4() {
    var sum = 0

    for (var i = 0; i < 100000000; i++) {
        var randNum = Math.random()
        sum += randNum
    }

    console.log('sum', sum)
}



// Write a function: printPrimes that gets 2 numbers:
// minRange and maxRange and prints 10 prime numbers in that range.

// printPrimes(100, 200)

function printPrimes(minRange, maxRange) {

    var counter = 0
    for (var num = minRange; num < maxRange; num++) {
        if (isPrime(num)) {
            console.log('num', num)
            counter++
            if (counter === 10) break
        }
    }
    console.log('Found ' + counter + ' prime numbers')
}

function isPrime(num) {
    if (num < 2) return false

    var divider = 2
    var limit = Math.sqrt(num)

    while (divider <= limit) {
        if (num % divider === 0) {
            return false
        }
        divider++
    }
    return true
}




