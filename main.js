const caixa1 = document.querySelector('#numero1')
const caixa2 = document.querySelector('#numero2')
const resultado = document.querySelector('#resultado')

function somar() {
    var n1 = Number(caixa1.value) 
    var n2 = Number(caixa2.value)
    var soma = n1 + n2

    resultado.innerHTML = `Resultado: <strong>${soma}</strong>`
}

function subtrair() {
    var n1 = Number(caixa1.value) 
    var n2 = Number(caixa2.value)
    var subtrair = n1 - n2

    resultado.innerHTML = `Resultado: <strong>${subtrair}</strong>`
}

function multiplicar() {
    var n1 = Number(caixa1.value) 
    var n2 = Number(caixa2.value)
    var multiplicar = n1 * n2

    resultado.innerHTML = `Resultado: <strong>${multiplicar}</strong>`
} 

function dividir() {
    var n1 = Number(caixa1.value)
    var n2 = Number(caixa2.value)
    var dividir = n1 / n2

    resultado.innerHTML = `Resultado: <strong>${dividir}</strong>`
}
