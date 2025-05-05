function configurar(){
    let btnExecutar = document.getElementById('executarBtn')
    let valorMax = document.getElementById('valorMax')
    let valorMin = document.getElementById('valorMin')
    
    if((btnExecutar instanceof HTMLButtonElement) && 
        (valorMax instanceof HTMLInputElement) &&
        (valorMin instanceof HTMLInputElement)) {
            btnExecutar.addEventListener('click', () => {
                geradorNumeros(Number(valorMax.value), Number(valorMin.value))
                valorMax.value = ''
                valorMin.value = ''
            })
        }
}

function geradorNumeros(valorMax, valorMin){
    console.log(valorMax, valorMin)
    let numeroGerado = Math.floor(Math.random() * valorMax) + valorMin
    exibirConteudo(numeroGerado)
}

function exibirConteudo(geration){
    let resultado = document.getElementById('resultado')
    if(resultado instanceof HTMLParagraphElement)
        resultado.textContent = `Número gerado: ${geration};`
}






document.addEventListener("DOMContentLoaded", configurar)