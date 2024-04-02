const saltar = () =>{

    let tecla = event.keyCode
        if(tecla == 38)
            mario.classList.add('saltar')

    setTimeout(()=>{
        mario.classList.remove('saltar')
    },500)
}
const loop = setInterval(()=>{

    const posicaoCano = cano.offsetLeft
    const posicaoMario = +window. getComputedStyle(mario).bottom.replace('px', '')

            if(posicaoCano <= 110 && posicaoCano > 0  && posicaoMario < 80){
            // Mario bate no cano e perde
            cano.style.left = `${posicaoCano}px`
            mario.style.bottom = `${posicaoMario}px`
           gameOver() 
          clearInterval(loop)
        }
} ,10)
function iniciarJogo(){

    if(inicializar){
        telaInicial.style.display = 'none'
        // cano.classList.add('canoAnimacao')
        cano.style.display = 'block'
         temporizador = setInterval(tempoJogo,500)
    }else{    
        open('./index.html','_self')
    }
}
document.addEventListener('keydown',saltar)
document.addEventListener('ontouchstart',saltar)
document.body.addEventListener('keypress',()=>{
    let tecla = event.keyCode
    if(tecla == 13)
        iniciarJogo()
})