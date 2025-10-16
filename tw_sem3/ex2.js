// implementati o functie care primeste ca parametru un arry de numere
// si un numar si returneaza suma tuturor numerelor din array divizibile cu 
// cel de-al doilea parametru
const numbers=[12, 4, 3, 9,5, 11, 23,21] // 12 3 9 21

const getSumDivisibleNo= (numbers, div)=>
{
    return (
        numbers
            .filter((number)=>{
                if(number%div==0)
                    return true
                else return false
                })
            .reduce((prevValue, currentValue)=>prevValue+currentValue)
    )
}

console.log(getSumDivisibleNo(numbers,3))