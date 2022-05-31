const totals = [1,2,3,4,5];

//como lo haciamos antes
let sum = 0;
for (let i = 0; i < totals.length; i++){
    const element = totals[i];
    sum = sum + element;
}
console.log(sum);

//reduce, con menos lineas de code
//sum = acumulador, | element = indice [i]
const rta = totals.reduce((sum, element) => sum + element, 0)// (parametro1, parametro2) => parametro1, parametro2 | el 0 es el parametro2 y es el estado inicial
console.log('rta', rta);

//reto
let numbers =[1, 1, 1];
function solution(numbers){
    const rtas = numbers.reduce((sum, element) => sum + element, 0)
    return rtas
};
console.log(solution(numbers));
