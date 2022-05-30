//For Each: ayuda hacer un recorrido de items de un array
const letters = ['a', 'b', 'c'];

//con el for 
for(let i=0; i < letters.length; i++){
    const element = letters[i];
    console.log('for', element);
}

//vs forEach: reducimos la lineas de código
letters.forEach(item => console.log( 'forEach',item));