const balls = document.querySelectorAll('.ball')
// const balls = document.getElementsByClassName('ball')
const body = document.querySelector('body')


balls.forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
})

let age = 19
let Name = "Sakshi"

console.log('Your age is ' + age)
console.log(`Hi ${Name} Your age is ${age}`)
