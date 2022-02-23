//Calculadora 1

let operacao = "+"

function calculadora (a,b) {
    if(operacao == "+") {
        console.log(a + b)
    }else if(operacao == "-"){
        console.log(a-b)
    }else if(operacao == "*"){
        console.log(a * b)
    }else if(operacao == "/"){
        console.log(a / b)
    }
}

console.log(calculadora(77,33))

//Calculadora 2

const calculadora2 = {
    soma: function(c,d) {
        return c + d;
    },
    subtrair: function(c,d) {
        return c - d
    },
    multiplicar: function(c,d) {
        return c * d
    },
    dividir: function(c,d) {
        return c / d
    },
}

console.log(calculadora2.soma(77,33))
