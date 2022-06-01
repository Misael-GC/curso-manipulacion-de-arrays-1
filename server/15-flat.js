//flat: manipular arrays dentro de arrays: aplanarlos
const matriz = [
    [1,2,3],
    [4,5,6, [1,2,[1,2]]],
    [7,8,9]
];


const newArray = [];
for (let i = 0; i < matriz.length; i++){
    const array = matriz[i];
    for(let j = 0; j < array.length; j++){
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('for', newArray);
//return: for [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//reto ver como hacer esto con arrays dentro de más arrays
// for [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]


//Facilitemosno la vida con flat
const rta = matriz.flat(3); //tienes que colocarle el numero de niveles de [] que debe de aplanar en este caso 3
console.log('flat', rta);

// flat [ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9 ]



//reto ver como hacer esto con arrays dentro de más arrays sin usar flat
function profundidad(list){
    let newList = [];
    if (typeof list != "object")return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}
const newArray1 = profundidad(matriz);
console.log("lol",newArray1);

// result: lol [ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9 ]


//otra version del reto

const hardMatrix = [
    [1, 2, [3, 3]],
    [4, [5, 5, [4, 2]], 6],
    [[1, [2, 3, 4, [3, [2, 1]]]], 8, 9],
  ];
  
  const recursiveArray = [];
  
  //La función recibe un array y el índice que se quiere evaluar
  const flatFunction = (array, index) => {
    // Si el índice ya es igual a lenght no hay comparación por hacer
    if (index === array.length) {
      return;
    }
  
    // Si el valor del array en ese índice es un objeto, vuelvo a llamar esta función con el índice cero.
    if (typeof array[index] === 'object') {
      flatFunction(array[index], 0);
    } else {
      // Si no es un objeto, es un valor, así que puedo hacer push()
      recursiveArray.push(array[index]);
    }
    // Independiente del If, hay que seguir evaluando las demás posiciones del array recibido.
    flatFunction(array, index + 1);
  };
  
  flatFunction(hardMatrix, 0);
  console.log('recursive:', recursiveArray);