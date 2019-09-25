/* 
Realice una función que reciba un arreglo de datos numéricos, 
y muestre la suma de todos los elementos del arreglo y su promedio.
*/

function promedio(numbers){
    var sum=0;
    for(var i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    console.log(sum);
    console.log(sum/numbers.length);
}

var numbers = [1,3,5,7];

promedio(numbers);
