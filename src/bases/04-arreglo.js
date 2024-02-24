const arreglo = [1, 2, 3, 4, 5]

let arreglo2 = [...arreglo, 6]
let arreglo3 = arreglo.map((arr, idx) => {
    return arr * 10
})

let obarray = [
    { key: 4, value: 10 },
    { key: 1, value: 45 },
    {
        key: 1, value: 45
    }];
let setarray = obarray.map((obj => {
    const newobj = {}
    newobj[obj.key] = obj.value
    return newobj

}))
let arrstring = ['1', '2', '3', '4', '5', '6']
let parsestring = arrstring.map((parseint => {
    return parseInt(parseint)
}))
let numbers = [56, 10, 74, 60, 5, 2, 76, 8, 9]
let concatarr = arrstring.concat(numbers)
let atarray = concatarr.at(-5)
let copywithin = arrstring.copyWithin(4)
let entries = numbers.entries()
for (let a of entries) {
console.log(a)
}
let currenvalue = (currenvalue) => {
   return currenvalue > 20;
}
let fill = numbers.fill(4,3,8)
let filter = numbers.filter(num => {
 return num >= 10 ;
})
let found = numbers.find(num => {
 return num > 10 ;
})
let join = arrstring.join('+')
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
console.log(setarray)
console.log(parsestring)
console.log(atarray)
console.log(concatarr)
console.log(copywithin)
console.log(entries)
console.log(numbers.every(currenvalue))
console.log(fill)
console.log(filter)
console.log(found)
console.log(join)

