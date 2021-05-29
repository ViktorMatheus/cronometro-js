//VARIAVEIS 

var centesimos = 0
var segundos = 0
var minutos = 0
var hora = 0
var contador = document.querySelector('#contador')
var botaoInicio = document.querySelector('#inicio')
var botaoContinuar = document.querySelector("#continuar")

//FIM DAS VARIAVEIS

//EVENTOS 

botaoInicio.addEventListener('click', iniciar)
botaoContinuar.addEventListener('click', continuar)


//FIM DOSEVENTOS

//ESTILIZAÇÂO 

botaoContinuar.style.display = 'none'
contador.style.color = 'white'
contador.innerHTML = (` ${hora} : ${minutos} : ${segundos} : ${centesimos} `) 

//FIM DA ESTILIZAÇÂO



//INICIA O CRONOMETOR

function iniciar(){
    
    inicioC = setInterval(function cronometro(){
            if(centesimos < 99){
                centesimos++
            } if (centesimos == 99){
                centesimos = -1
                segundos++
            } if( segundos == 60){
                segundos = 0
                minutos++
            }if (minutos == 60){
                minutos = 0
                hora++
            }               
            
            contador.innerHTML = (' ')
            contador.innerHTML += (` ${hora} : ${minutos} : ${segundos} : ${centesimos} `) 

            
            botaoInicio.style.display = 'none'
            botaoContinuar.style.display = 'inline-block'

        },10)

}

//FIM DOS INICIO DO CRONOMETRO


//PARAR O CONOMETRO

function parar(){
    clearInterval(inicioC)
    botaoContinuar.addEventListener('click', continuar)
}

//FIM DO PARAR CRONOMETRO


//CONTINUAR CONTAGEM DO CRONMETRO

function continuar(){

        clearInterval(inicioC)
        iniciar()
        botaoContinuar.removeEventListener('click', continuar)

} 

//FIM DO CONITNUAR CONTAGEM DO CRONMETRO


//REINICIAR O CRONMETRO

function reiniciar(){    
    clearInterval(inicioC)
    contador.innerHTML = (" ")
    contador.innerHTML += (` ${hora = 0} : ${minutos = 0} : ${segundos =  0} : ${centesimos = 0} `)

    botaoContinuar.style.display = 'none'
    botaoInicio.style.display = 'inline-block'

    botaoContinuar.addEventListener('click', continuar)

}

//FIM DO REINICIAR O CRONOMETRO