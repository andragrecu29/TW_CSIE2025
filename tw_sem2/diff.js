// implementati o functie care returneaza numarul de caractere diferite dintre 
// 2 stringuri egale primite ca parametrii
// daca stringurile nu sunt egale nu se va intoarce nimic
// "abc", "abcd" => -1
// "abc", "abc" => 0
//"abcd", abcxy => 2

var nr=0;
function nrCaract(sir1, sir2)
{
    if (sir1.length ===sir2.length)
    {
        for (let i=0; i<sir1.length; i++)
            if(sir1[i]!=sir2[i])
                nr++;
        return nr;
    }
    else
        return -1;
}

console.log(nrCaract("abc", "abcy"));
