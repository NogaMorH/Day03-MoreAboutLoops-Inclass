
// demoForLoop()

function demoForLoop() {
    var sum = 0
    for (var i = 0; i < 3; i++) {
        var num = +prompt('Enter num:')
        sum += num
    }
    alert('Sum is: ' + sum)
}

// loopOverString()

function loopOverString() {

    var str = 'ABCDE'
    console.log('str', str)

    for (var i = 0; i < str.length; i++) {
        // console.log('i', i)
        var letter = str.charAt(i)
        console.log(letter)
    }
}


// nestedLoops()

function nestedLoops() {
    for (var i = 0; i < 3; i++) {
        var line = ''
        for (var j = 0; j < 3; j++) {
            line += getRandomIntInclusive(10, 14) + '\t'
        }
        console.log(line)
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}