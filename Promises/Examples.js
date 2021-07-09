//EJEMPLO 1 
const verificarValores = new Promise((resolve,reject)=>{
  const a = 5;
  const b = 3;
  if(a>b){
    resolve("A es mayor a B");
  }else{
    reject("A no es mayor a B");
  }
});

verificarValores
  .then(response => console.log(response))
  .catch(error => console.log(error));
  
//EJEMPLO 2
  const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

//EJEMPLO 3

//Dado un array de objetos:

const data = [
  {
    id:1,
    title: 'Iron Man',
    year: 2008
  },
  {
    id:2,
    title:'Spiderman Homecoming',
    year:2017
  },
  {
    id:3,
    title:'Advengers Endgame',
    year:2019
  }
]

//Dada una funcion que devuelva los datos simulando la asincronia con setTimeout:

/* const getData = () =>{
  setTimeout(()=>{
    return data;    
  },1500);
}
 */ 

//el ejemplo anterior nos devolveria undefined 

const getDatos = () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(data);
    },1500);
  });
}

getDatos()
  .then((data)=>console.log(data));


