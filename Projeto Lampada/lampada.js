const img = document.getElementById('imagem')

function isBroken(){
    if ( img.src.indexOf('quebrada') !== -1) {
        return true
    } else{
        return false
    }
}

function quebrar(){
    img.src='./Imagens/quebrada.png'
}

function ligar(){
    if (!isBroken())
    img.src='./Imagens/ligada.png'
}

function desligar(){
    if (!isBroken())
    img.src='./Imagens/apagada.png'
}

