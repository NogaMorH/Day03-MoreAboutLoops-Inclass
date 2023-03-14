

demoCount()

function demoCount() {
    var count = 0
    while (count < 10) {
        console.log(count)
        count++
    }
    console.log('Done')
}

// demoDigits()

function demoDigits() {
    var num = 98765
    while (num > 0) {
        // console.log('num', num)
        var digit = num % 10
        // console.log('digit', digit)
        num = parseInt(num / 10)
    }
}

// demoZakif()

function demoZakif() {
    var msg = 'Please enter your choice (0 to exit):'
    var choice = +prompt(msg)
    while (choice !== 0) {
        alert('Your choice is: ' + choice)
        // TODO: handle the user choice here
        choice = +prompt(msg)
    }
    alert('Bye')
}