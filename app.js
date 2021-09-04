const element = document.querySelector('#selectme')
// element.innerHTML = "This is from JS"

// element.style.color = "cyan"
// element.style.fontSize = "40px"
// element.style = 'display:none'

// console.log(element.classList)
// element.classList.add('five')
// console.log(element.classList)
// element.classList.remove('one')
// console.log(element.classList)

// const body = document.querySelector('body')

// console.log(body.classList.toggle('dark'))
// toggle internally implements if...else to check
// whenever toggles add the class name them it returns true, if it finds the dark already present then it would not  add the dark so it will return false


const value = element.classList.contains('three')

console.log(value)