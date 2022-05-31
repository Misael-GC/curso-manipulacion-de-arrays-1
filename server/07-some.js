const numbers = [1,2,3,4];
// vamos a ver si alguno es par

let rta = false; //respuesta inicia en false
for(let i = 0; i < numbers.length; i++ ){
    const element = numbers[i];
    if (element % 2 === 0){ // al dividirlo entre 2  el resultado es  0 dame true
        rta = true;
        break;
    }
}

console.log(rta);

// vs some
const rta2 = numbers.some(item => item  % 2 === 0);
console.log('rta2', rta2);

// hagamoslo con objetcs --------------------------------------------------
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

// vs some
const rta3 = orders.some(item => item.delivered); //si una orden fue entregada como ya tiene true y false, ya se aplica solo
console.log('rta3', rta3);


//vamos aplicar una libreria

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10), //01/01/2021 10:00 am
      endDate: new Date(2021, 1, 1, 11), // 11:00 am
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15), // 03:00 pm
      endDate: new Date(2021, 1, 1, 15, 30), // 03:30 pm
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20), // 08:00 pm
      endDate: new Date(2021, 1, 1, 21), // 09:00 pm
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  //queremos valuar  si puedo o no agendar y que no se cruzan alguna de las citas que ya tengo, si cruza no puedo agendar 
  //vamos a usar una libreria para detectar si hay cruce entre fechas y luego un some para ejecutar esa funcion en la iteracion
  // dentro de la carpeta server: npm i date-fns
  // ve a https://date-fns.org/v2.28.0/docs/areIntervalsOverlapping
  // ya puedes pegar la variable que conecta a la libreria: -----👇
  var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

  //creamos una funcion para ver si se cruzan o no 

  const isOverlap = (newDate) => { //newDate es la nueva fecha que quiero ver si puedo o no agendar
      return dates.some(date => { // fecha ver si se sobrepone 
        return areIntervalsOverlapping( //aplicamos la libreria
        {start: date.startDate, end: date.endDate}, //apply las dates sintaxis | esto es de la fecha que ya tengo agendada
        {start: newDate.startDate, end: newDate.endDate}, //apply las dates sintaxis | esto es de la new fecha
        )
      }) 
  }

  console.log('result', isOverlap(newAppointment));
// result: true  -------> la fecha se sobrepone
// result: false  -------> la fecha no se sobrepone
