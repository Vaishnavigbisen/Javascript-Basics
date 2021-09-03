//Conditional Statements

//checks whether the number is even or odd

const a = 0

if (typeof a === 'number') {
    if (a === 0) {
        console.log("Number is zero")
    }
    else if (a % 2 === 0) {
        console.log("Number is even")
    }
    else {
        console.log("Number is odd")
    }
} else {
    console.log("Not a number")
}

