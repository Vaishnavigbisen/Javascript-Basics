// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')


function logName(Name = "Neha", age =18) {
    //console.log("Vaishnavi")
    console.log(Name + " you are " + age)
  }

//never misspell the function keyword
//a function can have multiple parameters.
//you can set default values for the parameters 
//Any variable you define inside a function's body is local to that function

function add(a=0, b=0) {
  return a + b
}

const result = add()
console.log(result)

//logName()

