const persona = {
    nombre: 'Angel',
    edad: 20,
    carrera: 'Sistemas',
    direccion: {
        ciudada: 'Yopal',
        zip: 40105,
        calle: 'Cll 4a 4 39'
    }
}

const persona3 = {...persona}
persona3.nombre = 'peter'
console.table({ persona })
console.table(persona3)