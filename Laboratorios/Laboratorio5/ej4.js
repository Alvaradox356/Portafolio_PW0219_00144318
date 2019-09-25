/*Elabore una función que llene un arreglo con 20 números de forma aleatoria (random),
 y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje 
 indicando que ganó, si no mostrará que perdió.
 */

function aleatorio(aleatorios, numero){
    var isEsta = false;
    for(var i=0; i<aleatorios.length; i++){
        if(aleatorios[i]==numero){
            isEsta=true;
            console.log("El numero esta en el arreglo");
            break;
        }
        if(isEsta==false){
            console.log("El numero no esta en el arreglo");
        }
    }
}

var numero= 7;
var aleatorios=[];
for (var i=0; i<20; i++){
    ramdom = (Math.floor(Math.random() *20)+1);
    aleatorios.push(ramdom);
}
console.log(aleatorios);
aleatorio(aleatorios, numero)