const letters = ['a', 'b', 'c'];

//map nos ahorramos todas las lineas del for, map genera un nuevo array y hace los cambios ahi
const newArray = letters.map(item => item + '++');

//con for: generamos una transformacion que se haga en un new array
// const newArray =[];
// for (let i = 0; i < letters.length; i++){
//     const element = letters[i];
//     newArray.push(element + '++'); //el ++ es la modificacion
// }
console.log('original', letters);
console.log('new', newArray);

// result: original [ 'a', 'b', 'c' ]
//         new [ 'a++', 'b++', 'c++' ]

//notas adicionales

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta);

//resultado: [ 1, 2, 3 ]


//  al trabajar con objetos se está modificando la referencia en memoria.

const arrayA = [{age: 1}, {age:2}]; 
const rtaA = arrayA.map(item => {   
  item.name = 'My name';
  return item; 
})

console.log(rtaA);

//RESULT [ { age: 1, name: 'My name' }, { age: 2, name: 'My name' } ]
