function sumar(a, b) {
  return a + b;
}
console.log(sumar(45, 5));

const saludar = function (nombre) {
  return `hola mi nombre es ${nombre}`;
};
const saludar2 = (nombre) => `hola mi nombre es ${nombre}`;
const perro = (raza) => `la raza del perro es ${raza}`;

const user = (userId) => ({
  userid: userId,
  contraseña: "teja con salchichon",
});
const getusuarioid = user("el bachatas");
const userproof = () => {
  return {
    userid: "paquita la cerda",
    contraseña: "teja con salchichon",
  };
};
console.log(getusuarioid);
// console.log(user());
console.log(userproof());
console.log(saludar("angel"));
console.log(saludar2("david"));
console.log(perro("chiguagua"));
