//Simular lanzar una moneda

const tossCoin = () =>{
  return Math.random() > 0.5? "heads":"tails";
}

//Cuanto tiempo para que la moneda caiga 5 veces seguidas cara

function fiveHeadsSync(){
  let headsCount = 0;
  let attemps = 0;
  while(headsCount < 5){
    attemps++;
    let result = tossCoin(); //cara o sello
     console.log(`${result} was flipped`);
     if(result === "heads"){
       headsCount++;
     } else{
       headsCount = 0;
     }
  }

  return `It took ${attemps} tries to flip five "heads"`;
}

console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");
