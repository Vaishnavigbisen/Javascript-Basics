const button = document.querySelector('button')
const element = document.querySelector('body')



button.addEventListener('click', () => {
    // console.log('you clicked me')
    // element.style = "background:aqua"
    element.classList.toggle('dark')
})
