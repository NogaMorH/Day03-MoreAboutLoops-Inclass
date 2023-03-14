// Read positive numbers until their sum is bigger than 100
// then print the average

// ex1()

function ex1() {
    var counter = 0
    var sum = 0
    while (sum <= 100) {
        var num = +prompt('Positive number?')
        console.log('num', num)
        sum += num
        // sum = sum + num
        counter++
        // counter = counter + 1
    }
    console.log('Counter:', counter)
    console.log('Sum:', sum)
    console.log('Avg:', sum / counter)
}


// Read numbers until you get an odd number, 
// then print the maximal even number you got
// Example: INPUT: 4, 2, 6, 5  EXPECTED: 6

// ex2()

function ex2() {

    var num = +prompt('Number?')
    var maxNum = -Infinity

    while (num % 2 === 0) {
        console.log('num', num)
        if (num > maxNum) {
            maxNum = num
        }
        num = +prompt('Number?')
    }
    console.log('maxNum', maxNum)
}


// Read names until “QUIT” is entered then print the names
// separated by *
// Example: INPUT: 'A', 'B', 'C', 'QUIT'  EXPECTED: '*A*B*C*'


// ex3()

function ex3() {

    var str = '*'
    var name = prompt('Name? QUIT to exit')

    while (name !== 'QUIT') {
        console.log('name', name)
        // str = str + name
        str += name + '*'

        name = prompt('Name? QUIT to exit')
    }
    console.log(str)

}

// demoCode()

function demoCode() {
    var myPinCode = '0796'
    var isValid = false
    // console.log('isValid', isValid)
    // console.log('!isValid', !isValid)
    while (!isValid) {
        var pinCode = prompt('Enter pin code')
        // console.log('pinCode === myPinCode', pinCode === myPinCode)
        isValid = (pinCode === myPinCode)
    }
    alert('Welcome')
}