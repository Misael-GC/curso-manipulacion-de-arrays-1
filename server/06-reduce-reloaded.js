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

  //aqui vamos a concatenar map y reduce, asi se hace 
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