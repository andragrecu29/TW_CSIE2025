let nr_prim = function (x) {
    for(let i=2; i<x; i++)
        if(x%i===0) return false;
    return true;
} 

if(nr_prim(parseInt(process.argv[2]))===true)
    console.log("Numarul este prim.")
else 
    console.log("Numarul nu este prim.")