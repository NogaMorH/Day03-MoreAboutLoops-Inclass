'use strict'

// Write a function formatTime(time) that returns a 
// formatted time: 
// Just now
// few minutes ago,
// Today
// Yesterday
// At 2018-09-24  Time: 10:23  
// Add Unit Testing 

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

// Timestamp 
var now = Date.now()
// console.log('now', now)

// t1 is 30 seconds ago - Just now
// var t1 = now - SECOND * 30
// console.log('t1', t1)
// console.log('INPUT:', '30 seconds ago')
// console.log('EXPECTED:', 'Just now')
// console.log('ACTUAL:', formatTime(t1))


// t2 is 3 minutes ago - Few minutes ago
// var t2 = now - MINUTE * 3
// console.log('t2', t2)
// console.log('INPUT:', '3 minutes ago')
// console.log('EXPECTED:', 'A few minutes ago')
// console.log('ACTUAL:', formatTime(t2))


// t3 is 3 hours ago - Today
// var t3 = now - HOUR * 3
// console.log('INPUT:', '3 hours ago')
// console.log('EXPECTED:', 'Today')
// console.log('ACTUAL:', formatTime(t3))


// t4 is Yesterday
// var t4 = now - HOUR * 30
// console.log('INPUT:', '30 hours ago')
// console.log('EXPECTED:', 'Yesterday')
// console.log('ACTUAL:', formatTime(t4))


// t5 is in the past - get formatted time
// var t5 = now - HOUR * 24 * 10
// console.log('INPUT:', '10 days ago')
// console.log('EXPECTED:', 'Actual date and time')
// console.log('ACTUAL:', formatTime(t5))


function formatTime(time) {
    // console.log('time', time)
    var now = Date.now()
    var diff = now - time
    // console.log('diff', diff)

    if (diff < MINUTE) return 'Just now'
    if (diff < MINUTE * 5) return 'A few minutes ago'
    if (diff < HOUR * 24) return 'Today'
    if (diff < HOUR * 24 * 2) return 'Yesterday'

    return getFormattedTime(time)
}

function getFormattedTime(t) {
    var d = new Date(t)
    // console.log('d', d)

    var str = 'At ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' +
        d.getFullYear() + ' Time: ' + d.getHours() + ':' + d.getMinutes()
    return str
}



















