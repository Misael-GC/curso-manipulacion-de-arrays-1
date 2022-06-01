const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

//array de productos que vaya eligiendo
const myProducts = [];

//objetivo es sacar de esa bolsa de productos y pasarlo a mis productos personales 
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//1- queremos adda product

const product = products.find(item => item.id === '🍔');
if(product){
    myProducts.push(product); //meterlo a un new array
    products.splice(); //delete un elemento por ubicacion
}
console.log("products", products);
console.log("myProducts", myProducts);  //myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10));

//como hacemos que al pasar ese producto se borre de ese array de products : como delete un elemento del array