import heroes, { owner } from "../data/heroes";

console.log(owner);
// console.log(heroes);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(3));

export const getHeroesByowner = (owner) =>
  heroes.filter((own) => own.owner === owner);
// console.log(getHeroesByowner("Marvel"));

// export default getHeroeById;
