const navIcon = document.querySelector('.nav-icon')
navIcon.addEventListener('click', toggleNav)

console.log(innerWidth)

function toggleNav(){
    console.log('djh')
    const barOne = document.querySelector('.bar-one')
    const barTwo = document.querySelector('.bar-two')
    const navUl = document.querySelector('.nav-ul')
    barOne.classList.toggle('nav-toggle-one')
    barTwo.classList.toggle('nav-toggle-two')
   
    navUl.classList.toggle('nav-toggle')
   
}