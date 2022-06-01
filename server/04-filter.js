const words = ['spray', 'limit', 'elite', 'exuberant'];
//
const newArray = [];
for (let i = 0; i < words.length; i++){
    const item = words[i];
    if(item.length >= 6){
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);
//se simplifica mucho el code
const rta = words.filter(item => item.length >= 6) //item es cada palabra
console.log('rta',rta);
console.log('original', words);

//-----------------------------------------------------------------------------------------------------------------------
//queremos las ordenes de compra que fueron entregadas 
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
    {
        customerName: 'Nicolas',
        total: 2240,
        delivered: false,
    },
];
//filtro que cumpla ciertas condiciones 
const etds =orders.filter(item => item.delivered && item.total>=100)//al ser true o false ya solo toma los true
console.log('etds', etds);

//Hagamos un buscador 🔎 por el nombre del cliente------------------------------------------------------------
//query = string que vamos a buscar 
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query); // si un string esta incluido dentro de customerName
    })
}

console.log(search('a'));
// resultado:
// [
//     { customerName: 'Nicolas', total: 60, delivered: true },
//     { customerName: 'Nicolas', total: 2240, delivered: false }
//   ]
//Mientras en el buscador este una letra que este en el  string te la va a traer como la 'a' 