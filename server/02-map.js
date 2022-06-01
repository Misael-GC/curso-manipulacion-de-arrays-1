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

//