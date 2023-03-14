// Write the function fancyLog(msg), 
// it prints the message to the console, surrounded by stars

// fancyLog('Hello JavaScript')
// fancyLog()

function fancyLog(msg) {
    console.log('********************')
    console.log('* ' + msg + ' *')
    console.log('********************')
}


// Write the function: personalizeMsg(greet, name, balance) 
// that returns something like: ‘Hi Puki, your balance is 20!’

// var res = personalizeMsg('Hi', 'Puki', 1000)
// console.log('res', res)

// res = personalizeMsg('Hola', 'Moshe', 10)
// console.log('res', res)

function personalizeMsg(greet, name, balance) {
    var msg = greet + ' ' + name + ', your balance is ' + balance + '!'
    // console.log('msg', msg)
    return msg
    // console.log('msg', msg) // this code will never run!
}


// var x = 12
// console.log('x', x)

// var z = foo()
// console.log('z', z)

function foo() {
    console.log('foo')
    console.log('x', x)
    var y = 17
    console.log('y', y)
    return y
}

// console.log('y', y)

console.log('hi 1')

f1()

console.log('hi 2')

function f1() {
    console.log('f1 calling f2')
    f2()
    console.log('f2 is done')
}

function f2() {
    console.log('Hi from f2')
    f3()
}

function f3() {
    console.log('Hi from f3')
}


