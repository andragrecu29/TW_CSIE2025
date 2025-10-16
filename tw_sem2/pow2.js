// node pow2.js 4
// let pow = function(x)
// {
//     console.log(x*x);
// }

// pow(4)

// sau
let pow2 = (n)=> n*n;
if(process.argv.length<3)
{
    console.log("Parametrii insuficienti")
}
else
{
    console.log(pow2(parseInt(process.argv[2])))
}

