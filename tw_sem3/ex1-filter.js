// afisati un array cu persoanele care au mai mult de 18 ani

const birthYears = [1998, 2002, 2012, 1995]

const currentYear=new Date().getFullYear();



const aboveEighteen= (array)=>
{
    return (
        array
        .map((birthYears)=>currentYear-birthYears)
        .filter((item)=>item>18)
    )
}

console.log(currentYear);
console.log(aboveEighteen(birthYears))