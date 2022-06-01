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

//1- queremos add a product

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !==-1){
    myProducts.push(products[productIndex]); //meterlo a un new array
    products.splice(productIndex, 1); //delete un elemento por ubicacion
}
console.log("products", products);
console.log("myProducts", myProducts);  //myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10));

//como hacemos que al pasar ese producto se borre de ese array de products : como delete un elemento del array

//products [
//     { title: 'Pizza', price: 121, id: '🍕' },
//     { title: 'Hot cakes', price: 121, id: '🥞' }
//   ]

//reto como harias para eliminar un array en este caso la de products sin mutar el array original, en un new array
//

const productsReto1 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const newArray = productsReto1.map(item => item);
const myProductsReto1 = [];
const productIndexR1 = newArray.findIndex(item => item.id === '🍔');
if(productIndexR1 !==-1){
    myProductsReto1.push(newArray[productIndexR1]); //meterlo a un new array
    newArray.splice(productIndexR1, 1); //delete un elemento por ubicacion
}
console.log("arrayOriginal", productsReto1);
console.log("myProductsReto1", myProductsReto1);  //myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("newArray", newArray);



//sigamos con otro ejemplo de mutables e inmutables 
//Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: '🥞',
    changes:{
        price: 200,
        description: 'delicius'
    } 
}

//como hacer la actualización solo al item del array 
// const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[productIndexV2] = update.changes;
// console.log(productsV2)

// [{ price: 200, description: 'delicius' }]      -----> sobre escribio con  ------> productsV2[productIndexV2] = update.changes;

//para que no suceda esto hacemos esto

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}
console.log(productsV2)

//result: ahora si lo respeta 

// [ { title: 'Hot cakes', price: 200, id: '🥞', description: 'delicius' }]

//reto 1: como harias para eliminar un elemento sin modificar el array original ✓  ---seccion de arriba ya se hizo
//reto 2 : como harias una modificacion a un array sin modificar el array original ✓ 

const productsR2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const updateR2 = {
    id: '🥞',
    changes:{
        price: 200,
        description: 'delicius'
    } 
}
const newArray2 = productsR2.map(item => item);

const productIndexR2 = newArray2.findIndex(item => item.id === updateR2.id);
newArray2[productIndexR2] = {
    ...newArray2[productIndexR2],
    ...updateR2.changes,
}
console.log('original', productsR2);
console.log('new', newArray2);
