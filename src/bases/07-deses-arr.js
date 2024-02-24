const tel = ["huawei", "samsumg", "apple", "xiaomi"];

const [agua, lux, pana] = tel;

console.log(lux);
const returarr = () => ["abc", 123];
const [abc, args] = returarr();
console.log(abc, args);

// Tarea

const usestate = (nombre) => [
  nombre,
  () => {
    console.log("hola como estas?");
  },
];
const [nombre, setNombre] = usestate();

console.log(usestate("Angel"));
setNombre();

