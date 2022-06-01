//sort es mutable y su funcion es cambiar el orden  de los arrays 
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
//result:  [ 'Dec', 'Feb', 'Jan', 'March' ]   --- lo ordeno por el abecedario
//esto tiene que ver la tabla de código ASCCI, si quieres ordenar por fecha debes darle un peso formato numero

//-------------------------------------------------------------------------------------------------------
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);
//[ 1, 100000, 21, 30, 4 ] 
//para ordenarlo correctamente y no como ASCCI 
numbers.sort((a,b) => a - b); //comparar elementos quien es mas grande que el otro
console.log(numbers);
//result: [ 1, 4, 21, 30, 100000 ] de menor a mayor

numbers.sort((a, b) => b - a); //ordenar de mayor a menor
console.log(numbers);
//[ 100000, 30, 21, 4, 1 ]

//------------------------------------------------------------------------------------------------------------------


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort()
console.log(words);
//[ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]  ----> orden de ASCCI, abecedario
//en caso de correr en navegadores que no sean modernos hazlo así
words.sort((a,b) => a.localeCompare(b));

//-------------------------------------------------------------------------------------------------------------------
//sort pero con objetos 

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

//quiero ordenar por el total de compras 
// cada a,b son los objetos 
orders.sort((a,b) => b.total - a.total);
console.log(orders)

//tenemos la impresion de mayor a menor 
// [
//     { customerName: 'Santiago', total: 1840, delivered: true },
//     { customerName: 'Nicolas', total: 600, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true },
//     { customerName: 'Zulema', total: 120, delivered: false }
//   ]


// reto de ordenar una fecha de tipo date de la mas reciente a la mas antigua y aplicarselo a orders

const ordersF = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        fecha: new Date( '05-06-2022')
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        fecha: new Date( '02-06-2022')
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        fecha: new Date( '11-06-2022')
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        fecha: new Date( '08-06-2022')
    },
];

//quiero ordenar por el total de compras 
// cada a,b son los objetos 
const dates = ordersF.sort((a,b) =>  b.fecha -  a.fecha);
console.log("reto", dates);


// reto [
//     {
//       customerName: 'Santiago',
//       total: 1840,
//       delivered: true,
//       fecha: 2022-11-06T06:00:00.000Z
//     },
//     {
//       customerName: 'Valentina',
//       total: 240,
//       delivered: true,
//       fecha: 2022-08-06T05:00:00.000Z
//     },
//     {
//       customerName: 'Nicolas',
//       total: 600,
//       delivered: true,
//       fecha: 2022-05-06T05:00:00.000Z
//     },
//     {
//       customerName: 'Zulema',
//       total: 120,
//       delivered: false,
//       fecha: 2022-02-06T06:00:00.000Z
//     }
//   ]



//---aportes solucion
