const items = [1, 3, 2, 3,];

//obj = acumulador 
const rta = items.reduce((obj, item) => {
    if(!obj[item]){  //si no existe  y no lo encuentra, quiero que lo inicies en 1
        obj[item] = 1; //encontre 1 elemento y al no estar lo inicia en 1
    } else{//si existe, sumale 1
        obj[item] += 1;
    }
    return obj;
},{}); //al objeto le damos un estado inicial 

console.log(rta);

//{ '1': 1, '2': 1, '3': 2 }

//otro ejemplo: quiero saber cuantos estan en diferente nivel
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  //aqui vamos a concatenar map y reduce, asi se hace, se puede agregar filtro y si hubiera por fecha hacerlo
  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]){  
        obj[item] = 1; 
    } else{
        obj[item] += 1;
    }
    return obj;
},{});

console.log(rta1);

//resultado : { low: 2, medium: 2, hight: 2 }



//reto: contar por rangos, de forma agrupada, 1-5, 6-8, 9-10

const numbers = [3, 10, 3, 2, 3,10,10,10,10,10,10, 6,6,,7,8,5,3,10];

//estructura del calculo principal de rango
const beerween = (x, min, max) => x >= min && x <= max;
//.reduce para que sume cada item que se repita
const rangoRepetitions = numbers.reduce((acumulador, item) => {
    //aplicando  la estructura del calculo principal
    if(beerween (item, 1,5)) acumulador["1-5"] +=1;// si 3 esta entre 1-5 suma 1
    if  (beerween (item, 6,8)) acumulador["6-8"] +=1;//si  7 esta entre 6-8 suma 1
    if (beerween (item, 9,10)) acumulador["9-10"] +=1; //si  10 esta entre 9-10 suma 1

    return acumulador;
},{"1-5": 0, "6-8": 0, "9-10": 0,}) //estado inicial del objeto
  /////////////////////------------------
console.log(rangoRepetitions);

// result :  { '1-5': 6, '6-8': 4, '9-10': 8 }