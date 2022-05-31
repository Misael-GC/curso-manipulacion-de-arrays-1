const orders =[
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentin',
        total: 240,
        delivered: true,
    },
];
//con map podemos seleccionar los items de un array de objetos para poder modificar------------------------------

console.log('original', orders);
const rta = orders.map(item => item.total)
console.log('rta', rta); //rta [ 60, 120, 180, 240 ]


//que pasa if i want to add a new item to my array--------------------------------------------------------------

// const rta2 = orders.map((item) => {
//     item.tax = 0.19;
//     return item;
// });
//console.log('rta2', rta2);  // resultado [ { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },]
//console.log('original', orders); // resultado [ { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },]

//¿que sucede? ¿porque me added tax to my original array? este es un error que solo se presenta en objetos, a los otros no solo a objetos

//como debemos hacer para que no mute el original ---------------------------------------------------------------
const rta3 = orders.map((item) => {
    return { //vamos a generar a new object || ecmascript 6 -- sprit obration
        ...item, //clonamos los atributos de objeto sin la referencia en memoria, copy in a new object 
        tax: .19
    };
});

console.log('rta3', rta3);  //[{ customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },]
console.log('original', orders); // [{ customerName: 'Nicolas', total: 60, delivered: true }]

function solution(array) {
    // Tu código aquí 👈 
   
} 

// reto--------------------------------------
//Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.
//Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

array = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ];
//Mi solucion
  function solution(array) {
    // Tu código aquí 👈 
   const result = array.map((item) => {
       return {
           ...item,
           tax: Math.trunc(.19 * item.price)
       };
   }); 
   return result
}; 

console.log(solution(array))

//respuesta
function solution(array){
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }))
}; 
