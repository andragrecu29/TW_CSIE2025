///FUNCTIA FILTER///

// const arr=[1,2,3,4,5];

// const result = arr.filter((item)=>item>2)
// console.log(result)

animalList=[
    "girafa", // forbidden word
    "leopard",
    "leu", //
    "urs", //
    "vulpe",
    "tigru"
]

const filterFunction = (list, forbiddenWord, minWorldLength)=>
list.filter((animal)=>(animal != forbiddenWord && animal.length>=minWorldLength ))

console.log(filterFunction(animalList,"girafa",4))