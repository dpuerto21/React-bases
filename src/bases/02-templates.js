
const nombre = 'Angel'
const apellido = 'Puerto'
const saludo = 'como te encuentras'

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto
)

function getSaludo(saludo) {
    
    return `hola ${nombre}` + saludo;
}

console.log(`${getSaludo()} . Gracias el placer es todo mio!`)