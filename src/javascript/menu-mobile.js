const btnMenu = document.querySelector('.btn-menu-mobile')
const menuMobile = document.querySelector('.menu-mobile')

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('alternar')

    menuMobile.classList.toggle('abrir')
})