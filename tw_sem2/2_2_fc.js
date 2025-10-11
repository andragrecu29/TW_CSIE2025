// FUNCTII

//1. functie clasica => cheie function =>  function nume_fct() { }
function hello()
{
    console.log("Hello");
}
hello();
//2. functie stoacata intr-o variabila [referinta] (functie expresie) => let hello=function() {}
let hello1= function(name)
{
    console.log("Salut " + name)
}

hello1("Alice")

// 3. arrow function => let nume_fc= () => { }
const greetArrow=(name)=> {
    console.log("Arrow " + name)
}
greetArrow("function");