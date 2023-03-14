// Read 2 numbers and print the bigger one

// var number1 = +prompt('Enter first Number:')
// var number2 = +prompt('Enter second Number:')

// console.log('number1', number1)
// console.log('number2', number2)

// if (number1 > number2) {
//     console.log('Bigger:', number1)
// } else {
//     console.log('Bigger:', number2)
// }


// Ask the user for the meal price,
// and print the total price with a 10% tip
// Use confirm() to ask the user if he
// was super happy, if so, add 5% more

// var mealPrice = +prompt('Meal price?')
// console.log('mealPrice', mealPrice)

// var totalPrice = mealPrice * 1.1

// var isSuperHappy = confirm('Feeling super happy?')
// console.log('isSuperHappy', isSuperHappy)

// if (isSuperHappy) {
//     totalPrice = mealPrice * 1.15
// }

// console.log('totalPrice', totalPrice)


// var itemCount = 90
// var isActiveUser = true

// if (itemCount > 100) {
//     alert('Too many')
// } else if (!isActiveUser) {
//     alert('Please activate your account')
// } else {
//     alert('You may order')
// }


// Read 2 numbers and check if either of them is a
// divider of the other

// var number1 = +prompt('Enter first Number:')
// var number2 = +prompt('Enter second Number:')

// console.log('number1', number1)
// console.log('number2', number2)

// if (number1 === number2) {
//     console.log('Same numbers..')
// } else if (number2 % number1 === 0) {
//     console.log(number1, 'Divides', number2)
// } else if (number1 % number2 === 0) {
//     console.log(number2, 'Divides', number1)
// } else {
//     console.log('Not dividers')
// }


// Read 3 numbers and check if they could be valid triangle sides,
// and which triangle are they
// triangle / isosceles / equilateral / right-angled
// ישר זווית / שווה צלעות / שווה שוקיים / משולש

// var side1 = +prompt('Side1?')
// var side2 = +prompt('Side2?')
// var side3 = +prompt('Side3?')

// if (side1 + side2 > side3 &&
//     side1 + side3 > side2 &&
//     side2 + side3 > side1) {
//     console.log('Valid triangle')

//     if (side1 === side2 && side2 === side3) {
//         console.log('equilateral') // שווה צלעות

//     } else if (side1 === side2 ||
//         side2 === side3 ||
//         side1 === side3) {
//         console.log('isosceles') //  שווה שוקיים
//     }

//     if (side1 * side1 + side2 * side2 === side3 * side3 ||
//         side1 * side1 + side3 * side3 === side2 * side2 ||
//         side3 * side3 + side2 * side2 === side1 * side1) {
//         console.log('Pitagoras!')
//     }

// } else {
//     console.log('Not a triangle')
// }


// Read 3 grades, check that they are in range 0-100,
// if so, print their average.

var grade1 = +prompt('Grade1?')
var grade2 = +prompt('Grade2?')
var grade3 = +prompt('Grade3?')

if (grade1 > 0 && grade1 <= 100 &&
    grade2 > 0 && grade2 <= 100 &&
    grade3 > 0 && grade3 <= 100) {
    console.log('Valid grades')
    var avg = (grade1 + grade2 + grade3) / 3
    console.log('avg', avg)
}
