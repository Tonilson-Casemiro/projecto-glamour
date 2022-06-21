var body = document.body

// Configurando o menu mobile
var iconeOpenMenu = document.getElementById('icone-open-menu')
var iconeCloseMenu = document.getElementById('icone-close-menu')
var nav = document.querySelector('nav')

iconeOpenMenu.addEventListener('click', function(){
    nav.classList.add('show')
    body.classList.add('scrollHidden')

})

iconeCloseMenu.addEventListener('click', function(){
    nav.classList.remove('show')
    body.classList.remove('scrollHidden')
})











// Sobre os modais de cada projecto



var projectos = document.querySelectorAll('.projecto')
console.log(projectos)

var modaisProjecto = document.querySelectorAll('.modaisProjecto')
console.log(modaisProjecto)

var closeModal = document.querySelectorAll('.modaisProjecto .fa-xmark')
console.log(closeModal)


 
// Modal do projecto1

closeModal[0].addEventListener('click', function(){
    modaisProjecto[0].style.display = 'none'
    body.classList.remove('scrollHidden')
})



projectos[0].addEventListener('click', function(){
    modaisProjecto[0].style.display = 'block'
    modaisProjecto[0].classList.add('animacaoModal')
    body.classList.add('scrollHidden')
})



// Modal do projecto2
closeModal[1].addEventListener('click', function(){
    modaisProjecto[1].style.display = 'none'
    body.classList.remove('scrollHidden')
})

projectos[1].addEventListener('click', function(){
    modaisProjecto[1].style.display = 'block'
    modaisProjecto[1].classList.add('animacaoModal')
    body.classList.add('scrollHidden')
})


// Modal do projecto3
closeModal[2].addEventListener('click', function(){
    modaisProjecto[2].style.display = 'none'
    body.classList.remove('scrollHidden')
})

projectos[2].addEventListener('click', function(){
    modaisProjecto[2].style.display = 'block'
    modaisProjecto[2].classList.add('animacaoModal')
    body.classList.add('scrollHidden')
})

// Modal do projecto4
closeModal[3].addEventListener('click', function(){
    modaisProjecto[3].style.display = 'none'
    body.classList.remove('scrollHidden')
})

projectos[3].addEventListener('click', function(){
    modaisProjecto[3].style.display = 'block'
    modaisProjecto[3].classList.add('animacaoModal')
    body.classList.add('scrollHidden')
})








/*for(i = 0; i <= 2; i++){
    projectos[i].addEventListener('click',function(){
        modaisProjecto[i].style.display = 'block'
    })
}*/















// Scroll Reveal

window.sr = ScrollReveal({reset: true})

sr.reveal('.logotipo',{
    rotate: {x:0, y:5, z:0},
    duration: 1000
})

sr.reveal('.conteudos-topo',{
    rotate: {x:0, y:10, z:0},
    duration: 2500
})

sr.reveal('.cubo-servicos',{
    rotate: {x:0, y:20, z:0},
    duration: 2500
})




