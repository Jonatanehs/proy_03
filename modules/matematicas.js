// Define la funcion sumar(add)
function add(a,b) {
    return a + b;
}

// define la funcion restar(substract)
function substract(a,b) {
    return a - b;
}

// define la funcion multiplicar(multiply)
function multiply(a,b) {
    return a * b;
}

// define la funcion dividir(divide)
function divide(a,b) {

/* se crea una condicion if anidada que si b es igual a 0
y a es igual a 0 retorne un mensaje diciendo No Aplica */
    if (b == 0 && a == 0)  {
        return "No Aplica";

// si b es igual a 0 retorne n/a 
    } else if(b==0){
    return "n/a";

// si las condiciones son falsas retorna a/b 
    }  else {
        return a / b;
    }

}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

