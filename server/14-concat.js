//concat es inmutable
const elements = [1,1,2,2];
const otherEmlements = [3,3,4,4];

//[...item] -------> se llama split operation, es una forma de copiar elementos del array sin referencia en memoria
const newArray = [...elements]; // se encierra en corchetes y tiene puntos para que al aplicarlo con concat no tenga referencio en memoria por el ciclo for que fue el 1er resultado y se impriman doble vez los items
for(let i = 0; i < otherEmlements.length; i++){
    const element = otherEmlements[i];
    newArray.push(element);
}

console.log('for', newArray);

const rta = elements.concat(otherEmlements);
console.log('concat', rta)

// result:  concat [ 1, 1, 2, 2, 3, 3, 4, 4 ]

//concatenar 2 arrays, opcion 2

const rta2 = [...elements, ...otherEmlements];
console.log('...', rta2);

//sin embargo ten cuidado con el spring operation porque solo aplica  a arrays, porque si es para una letra  o parrafo va a tratar de separar cada item

const rta3 = [...elements, ...'random']; // si lo quieres como uno solo recomiendo delete los 3 puntos del random
console.log(rta3);
//resultado: [
//   1,   1,   2,   2,   'r', 'a', 'n', 'd', 'o', 'm' ]

//concat si te respeta hablando del anterior ejemplo

//si quieres agregarle algo al array y mutarlo:

// elements.push(otherEmlements);
// console.log('element', elements);

// result: element [ 1, 1, 2, 2, [ 3, 3, 4, 4 ] ]

//pero si quieres que sean los puros items sin los corchetes 
elements.push(...otherEmlements);
console.log('elementos', elements);
// result elementos [ 1, 1, 2, 2, 3, 3, 4, 4 ]

