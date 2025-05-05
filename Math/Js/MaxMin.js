function configurar(){
    let btnExecutar = document.getElementById('executarBtn')
    let seqNum = document.getElementById('seqNum')

    if((btnExecutar instanceof HTMLButtonElement) && 
        (seqNum instanceof HTMLInputElement)){
        btnExecutar.addEventListener('click', () => {
            executar(seqNum.value) 
            seqNum.value = ''
        })
    }
}

function executar(seqNumStr){
let numeros = seqNumStr.split(',')
let valorMax = Math.max(...numeros)
let valorMin = Math.min(...numeros)
exibirConteudo(valorMax, valorMin)
}

function exibirConteudo(maior, menor){
    let resultado = document.getElementById('resultado')
    if(resultado instanceof HTMLParagraphElement){
        resultado.textContent = ` O maior valor é ${maior} o menor valor é ${menor}`
    }
}

document.addEventListener("DOMContentLoaded", configurar)