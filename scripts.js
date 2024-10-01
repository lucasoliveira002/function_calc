let a = 3
let b = 6
let operacao = "multiplicacao"

function calculadora(a, b, operacao) {
    if (operacao === "soma"){
        return a + b;
    }
    if (operacao === "subtracao"){
        return a - b;
    }
    if (operacao === "multiplicacao"){ 
        return a * b;  
    }
    if (operacao === "divisao"){
        if (b === 0){
            return ("Operação inválida")
        }
        else{
            return a / b;
        }
    }
    else{
        return ("Dê valores")
    }
}

console.log(calculadora(a, b, operacao));