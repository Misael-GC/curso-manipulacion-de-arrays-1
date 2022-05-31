const numbers = [1,30,49,29,10,14];

let rta = "no esta en el array ¯|_(ツ)_/¯"
for(let i = 0; i <numbers.length; i++){
    const element = numbers[i];
    if (element === 30){
        rta = element + " lo he localizado, y yo soy tu padre sky woker";
        break;
    }
}
console.log("for", rta);

const rta2 = numbers.find(item => item === 30);
console.log(rta2);

//objetos 

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta4 = products.find(item => item.id === '🍔');
console.log(rta4);
// result: { name: 'Burger', price: 23, id: '🍔' }

//Hay una variante que te indica en que posicion se encuentra 

const rta5 = products.findIndex(item => item.id === '🍔');
console.log('posicion', rta5);
//result: posicion 1 en el index[0,1,2,3,4], es correcto