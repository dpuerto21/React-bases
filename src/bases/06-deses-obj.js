const cantidadColor = {
  azul: 40,
  verde: 20,
  amarillo: 10,
  morado: 41,
  rosado: 78,
};
const persona = {
  nombre: "angel",
  edad: 54,
  sexo: "M",
  apellido: "puerto",
};

const carro = ["huracan", "bugati", "supra", "aventador"];

const [] = carro;

const { verde, morado } = cantidadColor;

const returnPersona = ({ nombre, rango = "Teniente", apellido }) => ({
  nombrecompleto: nombre,
  apellido: apellido,
  caracteristicas: {
    juego: "league of legends",
    champ: "lucian",
    linea: "adc",
  },
});
const {
  nombrecompleto,
  apellido,
  caracteristicas: { juego, champ, linea },
} = returnPersona(persona);
console.log(nombrecompleto);
console.log(apellido);
// console.log(caracteristicas);
console.log(juego);
// console.log(nombre, rango);

returnPersona(persona);
console.log(cantidadColor.morado);
console.log(verde);
console.log(carro);
