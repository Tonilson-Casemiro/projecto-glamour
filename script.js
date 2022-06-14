// Configurando o menu mobile
var iconeOpenMenu = document.getElementById('icone-open-menu')
var iconeCloseMenu = document.getElementById('icone-close-menu')
var nav = document.querySelector('nav')

iconeOpenMenu.addEventListener('click', function(){
    nav.classList.add('show')
})

iconeCloseMenu.addEventListener('click', function(){
    nav.classList.remove('show')
})




// Sobre os modais de cada projecto




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

