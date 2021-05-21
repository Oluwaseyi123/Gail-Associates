const navIcon = document.querySelector('.nav-icon')
navIcon.addEventListener('click', toggleNav)

console.log(innerWidth)

function toggleNav(){
    const chevronUP = document.querySelector('.chevron')
    chevronUP.classList.toggle('chevron-down') 
    const navUl = document.querySelector('.nav-ul')
    navUl.classList.toggle('nav-toggle')
}