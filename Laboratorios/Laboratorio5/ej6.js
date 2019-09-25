/* ------- 6 ----------- */
var ord = function(x){
    var mayor = 0;
    for(let i=0; i<x.length; i++){
        menor= x[i];
        for(let j=0; j<x.length; j++){
            if(menor < x[j]){
                menor = x[j];
                var aux = x[i];
                x[i] = x[j];
               x[j] = aux;
            }
        }
    }
    console.log(x)
}
var ars = [5 , 2 , 80, 59 , 1 , 7 , 96, 150];
ord(ars);