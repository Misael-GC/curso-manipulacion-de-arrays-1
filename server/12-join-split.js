const elements = ['Fire', 'Air', 'Water'];
let rtaFinal = '';
const separador = '--';
for (let i = 0; i < elements.length; i++){
    const element = elements[i];
    rtaFinal = rtaFinal + element + separador;
}
console.log('for', rtaFinal);

//result: for Fire--Air--Water--
  
//ahora con join
const rta = elements.join('--');

console.log('join', rta);

//result: join Fire--Air--Water

//------------------------------------------split()---------toLowerCase()-----------------
const title ='Curso de manipulacion de arrays';

// const urlFinal = title.split(' ');   ---------> [ 'Curso', 'de', 'manipulacion', 'de', 'arrays' ]
//split va separar la cadena de string 


// const urlFinal = title.split(' ').join('-');  -------->  Curso-de-manipulacion-de-arrays
//join lo une todo en una cadena de strings

const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
//toLocaleLowerCase  transforma todo a minuscula 
console.log(urlFinal);
// result: -------->  curso-de-manipulacion-de-arrays