/*1. Sa se calculeze maximul si minimul dintre trei numere. 
Rezultatele vor fi salvate in variabilele max, respectiv min*/


const a = 5;
const b = 15;
const c = 3; 

let max, min;

// max
if(a >= b && a >= c){
    max = a;
}else if (b >= a && b >= c){
    max = b;
}else if (c >= a && c >= b){
    max= c;
}

console.log("Maxim:", max)

// min
if(a <= b && a <= c){
    min = a;
}else if (b <= a && b  <= c){
    min = b;
}else if (c <= a && c <= b){
    min= c;
}

console.log("Minim:", min)

/*2. Sa se calculeze, folosind instructiunea while, suma primelor n numere pare. 
   EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12*/  
//    COPIATA DUPA CURS.

    let n = 3;
    let suma = 0;

    while(n > 0){
        suma += n * 2;
        n--
    }
    console.log(suma)

/*3. Folosind instructiunea for, sa se afiseze in consola primele 10 numere naturale, 
in ordine descrescatoare.*/

const limit = 10;
let i;

for(let i = 10; i >= 0; i-- ){
console.log(i)
}