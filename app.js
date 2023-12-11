// se importa el modulo de colores de node js 
require('colors');

/* se requiere las funciones que estan en matematicas
y se guardara en matematicas  */
const matematicas = require('./modules/matematicas.js') 
    
const main = async() => {
    console.clear()
    console.log('***************************'.magenta);
    console.log('*  '.magenta + 'Resultados matematicos'.bgCyan + ' *'.magenta);
    console.log('***************************'.magenta);


    console.log(matematicas.add(5,3));
    console.log(matematicas.substract(2,8));
    console.log(matematicas.multiply(2,8));
    console.log(matematicas.divide(2,0));
}

main(); 
