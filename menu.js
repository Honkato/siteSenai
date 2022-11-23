const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menuMobile')
const menuMobileBack = document.getElementById('menuMobileBack')
const menuCat = document.getElementById('menuCat')
const catego = document.getElementById('categorias')

menuCat.addEventListener('click', categorias)
botao.addEventListener('click', abrir)

function abrir(){
    menuMobileBack.classList.toggle('active')
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
}

function categorias(){
    menuCat.classList.toggle('active')
    catego.classList.toggle('active')
}

function alertas(){
    alert("No momento não é possivel fazer isso no momento")
}
