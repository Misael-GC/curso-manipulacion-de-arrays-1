const pets =['cat', 'dog', 'bat'];

let includeInArray = false; //por defercto es false

for (let i = 0; i < pets.length; i++){
    const element    = pets[i];
    if (element === 'dog'){
        includeInArray = true;
        break; 
    }
}
console.log('for', includeInArray);


//includes no recibe un arrow function, solo poner el item
const rta = pets.includes('dog');
console.log('rta', rta);