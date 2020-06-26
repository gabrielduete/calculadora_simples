var displayB = ""
var numero = ""
var opers = [undefined, undefined, undefined]
var resultado = undefined

/* Concatenando o número do botão pressionado */

function clickNum(num) {
    numero = numero.concat(num.innerHTML)
    mostrarDisplay(num.innerHTML)

}

/* Funções do display da calculadora */

function limpar() {
    numero = ""
    limparDisplay()
}

function limparDisplay() {
    displayB = ""
    var tela = document.getElementById('display')
    tela.value = displayB
}

/*function limparAll(){
    limpar()
    limparDisplay()
}*/


function mostrarDisplay(algo) {
    displayB = displayB.concat(algo)
    var tela = document.getElementById('display')
    tela.value = displayB
}

/* Funções dos Operadores */

function operadores(op) {
    if(opers[1]==undefined){
        opers[0] = numero
        opers[1] = op.innerHTML
        mostrarDisplay(op.innerHTML)
        numero = ''
    }
}

/* Função mostrar o Valor */

function result(){
    if(opers[0] != undefined && opers[1] != undefined && numero != ""){
        opers[2] = numero
        var guardresult
        switch(opers[1]){
            case '+':
                resultado = Number(opers[0])+Number(opers[2])
                break
            case '-':
                resultado = Number(opers[0])-Number(opers[2])
                break
            case '*':
                resultado = Number(opers[0])*Number(opers[2])
                break
            case '/':
                resultado = Number(opers[0])/Number(opers[2])
                break
            default:
                break
        }
        guardresult = resultado
        limparDisplay()
        mostrarDisplay(resultado)
        limparTudo()
        numero = guardresult.toString()
    }
}

/* Limpando todos os valores das variaveis pra recalcular */

function limparTudo(){
     numero = ""
     opers = [undefined,undefined,undefined]
     resultado = ""
}