//Simular lanzar una moneda

const tossCoin = () => {
  return Math.random() > 0.5 ? 'heads' : 'tails';
};

//Cuanto tiempo para que la moneda caiga 5 veces seguidas cara

function fiveHeadsSync() {
  let headsCount = 0;
  let attemps = 0;
  while (headsCount < 5) {
    attemps++;
    let result = tossCoin(); //cara o sello
    //console.log(`${result} was flipped`);
    if (result === 'heads') {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }

  return `It took ${attemps} tries to flip five "heads"`;
}

/* console.log("inicio");
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");   */

//VERSION UTILIZANDO PROMESAS(SIMULACION ASINCRONA):

const fiveHeadsAsync = () => {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attemps = 0;
    while (headsCount < 5) {
      attemps++;
      let result = tossCoin(); //cara o sello
      console.log(`${result} was flipped`);
      if (result === 'heads') {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }

    if (attemps <= 100) {
      resolve(`It took ${attemps} tries to flip five "heads"`);
    } else {
      reject(`Take to many attemps`);
    }
  });
};

console.log('inicio');
fiveHeadsAsync()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
console.log('final');
