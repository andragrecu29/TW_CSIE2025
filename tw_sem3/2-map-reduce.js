// const arr=[1,2,3,4,5];
// const result = arr.map((item)=>item*item);
// console.log(result);

const sides=[10,9,5,12,4,3];

const getTotalAreas = (array)=>{
    return (
        array
            .map((item)=>item*item)
            .reduce((prevValue,currentValue) => prevValue+currentValue)
    )
}

console.log(getTotalAreas(sides))