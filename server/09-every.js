// every: todos deben de cumplir con la condicion: solo retorna true or false 
const numbers = [1,30,49,29,10,15];

let rta = true; //vamos a desmentirnos, si uno no cumple devolvera false
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element >= 40){  // si todos son mayor o igual a 40
        rta = false // aqui le ponemos false para manipular el resultado 
    }
}
console.log('for', rta); //result: false, solo 1 es mayor a 40 y es 49 los demas son menores

//vs every

const rta2 = numbers.every(item => item <= 40) //si todos son menores  o = 40 devuelve true
console.log('every', rta2) //result: false, 1 es mayor a 40 y es 49

//reto: valuar que todos los miembros de este equipo sean menores de 15 años, si no cumplen no son aceptados 


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta4 = team.every(item => item.age <= 15);
  console.log(rta4);
//   result: false hay uno que no cumple yu es el de 18