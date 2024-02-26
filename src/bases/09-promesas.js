import { getHeroeById } from "./bases/08-import-export";
// // import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(1);
//     // console.log(heroe);
//     resolve(heroe);
//     reject("no se encontro el Heroe ");
//   }, 3000);
// });

// promesa
//   .then((heroe) => {
//     // console.log("la promersa se resolvio, correctamente");
//     console.log(`El heroe encontrado es ` + heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (getHeroeById) {
        resolve(heroe);
      } else {
        reject("no se encontro el Heroe");
      }
      // console.log(heroe);
    }, 1000);
  });
};

getHeroeByIdAsync(10).then(console.log).catch(console.error);
