const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  // si queremos tener un array completo de todos los atributos de mis users 
  //si solo quiero sus atributos hacemos lo siguiente:
  const rta = users.map(users => users.attributes).flat()
  console.log('map|flat', rta);
  
  //sin el .flat() -----------------> [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]
  //conn el .flat() -----------------> [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
  
  //ahora apply flatmap
  const rta2 = users.flatMap(users => users.attributes);
  console.log('flatMap', rta2);
  //flatMap [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

  //reto como podemos hacer un flatmap sin tener un array de arrays
  //quiero un array de las fechas de inicio de esos a poiments

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

let reto = Object.values(calendars).flat().map(item => item.startDate);
//El calendario lo convierto de objeto a array. lo aplano un nivel para quitar la división de primary y secondary y luego le mapeo el startDate
console.log('obj', reto);

// Object.values /https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values




//solucion profesor

const solution = Object.values(calendars).flatMap(item => {
 return item.map(date => date.startDate)
});
console.log(solution);


//aporte 
const rtaAport = Object.values(calendars).flat().flatMap(cal => cal.startDate)


//explicacion
// 1- Con Object.values, obtenemos una lista con los valores de cada key en nuestro objeto calendars
// 2 - Con flat “aplanamos” la lista ya que con el paso anterior nos quedan dos arrays dentro de uno: [ [ ], [ ] ]
// 3 - Con map recorremos cada elemento de la lista ya unificada. Estos elementos son finalmente objetos asi que solo nos queda acceder al atributo de startDate y listo
