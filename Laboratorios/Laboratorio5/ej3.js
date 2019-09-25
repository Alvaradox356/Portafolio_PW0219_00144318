/*
3- Realice una función en JS, que dados un número y un arreglo como parámetros,
 retorne cuantas ocurrencias existen de ese número dentro del arreglo.
*/

function contador(number, numbers){
    var cont = 0;
    for(var i=0; i<numbers.length; i++){
        if(number == numbers[i]){
            cont = cont + 1;
        }
    }
    console.log(cont);
}

var number = 7;
var numbers =[1,2,3,4,5,6,7,7,7,7,7,7,7,7];

contador(number, numbers);
