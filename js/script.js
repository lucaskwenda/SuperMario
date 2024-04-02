const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const telaInicial = document.querySelector('.comecarJogo')
let gameOverInfo = document.getElementsByTagName('h1')[0]
let tempoFinal = document.querySelector('#tempo-final')
let cmd = document.getElementsByTagName('button')[0]
let inicializar = true
let temporizador
let seg = 0
let min = 0

function tempoJogo(segundos,horas){
   
   let tempo = document.querySelector('.tempo')
    if(seg < 60){
        tempo.innerHTML = `<strong>0${min}:${seg}s</strong>`
        seg ++
    }else if(seg >= 60){
        min ++
        seg = 0
        tempo.innerHTML = `<strong>0${min}: ${seg}s</strong>`
    }else if(min >= 10){
        tempo.innerHTML = `<strong>${min}: ${seg}s</strong>`
    }
}
function gameOver(){

    clearInterval(temporizador)
    alterarObjetosJogo()
    inicializar = false

    setTimeout(()=>{
        telaInicial.style.display = 'block'
        gameOverInfo.innerHTML = '<strong>Game-Over</strong>'
        tempoFinal.innerHTML = `<strong>Tempo: ${min}:${seg}s</strong>`
    },500) 
}
function alterarObjetosJogo(){
    cano.style.animation = 'none'
    mario.style.animation = 'none'
    mario.src = './imagens/game-over.png'
    mario.style.width = '70px'
    mario.style.marginLeft = '40px'
    document.querySelector('.texto-info').style.display = 'none'
    cmd.innerHTML = '<strong>Inicio</strong>'
}