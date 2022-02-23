let operacao = "-"

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

console.log(calculadora(5,5))
