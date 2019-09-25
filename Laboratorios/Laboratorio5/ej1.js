/*
1-Realice una función que reciba un arreglo como parámetro 
y liste los tipos de datos de sus elementos y cuantos de cada tipo.
*/ 

var typo = function(x){
    var arrtypes = [];
    arrtypes.push(typeof x[0]);
    arrtypes.push(1);
    for(let i=1; i< x.length; i++){
        if(!arrtypes.includes(typeof x[i])){
            arrtypes.push(typeof x[i]);
            arrtypes.push(1);
        }else{
            arrtypes[arrtypes.indexOf(typeof x[i])+1] = arrtypes[arrtypes.indexOf(typeof x[i])+1] +1; 
        }
    }
    console.log(arrtypes);
}

var x = [1, "hola", persona={nombre: "jesus"}];

typo(x);