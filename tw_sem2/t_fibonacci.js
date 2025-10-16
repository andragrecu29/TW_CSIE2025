function fibonacii(n)
{
    let element1=1;
    let element2=1;
    let elementNou;
    let index=2;
    while(index<n)
    {
        elementNou = element1+ element2
        element1 = element2
        element2 = elementNou
        index++;
    }

    return elementNou;
}

console.log(fibonacii(7));