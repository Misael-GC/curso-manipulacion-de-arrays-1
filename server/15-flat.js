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



