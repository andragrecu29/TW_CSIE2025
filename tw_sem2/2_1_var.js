/// var => global scope ///
    // var nr=10;
    // console.log(nr)
    // nr=19;
    // console.log(nr)

    // nr=10;
    // var nr;
    // console.log(nr)

/// let => local scope ///
let nume = "Ana";
console.log(nume)

// let firstName;
// console.log(firstName)
// firstName="Popescu";
// console.log(firstName)

// let x=7;
// {
//     let x=8; // x=8
//     console.log(x)
// }
// console.log(x) // x=7

// 1. numele unei variabile poate contine litere, cifre, _, $ !! 
// 2. numele unei variabile nu incepe nicioadata cu o cifra

// let lastName = "Ionescu"; //camelCase
// let last_name = "Popescu"; // underscore
// let LastName="Tanase"; // PascalCase

/// const => constanta, nu se modifica o data initializata
// const PI = 3.1415;
// console.log(PI)
// // PI=3.14
// // console.log(PI)

// const numbers = [1, 2, 3];
// console.log(numbers);
// numbers[0]=25;
// numbers.push(19);
// console.log(numbers);

// numbers=[3, 4, 5];
// console.log(numbers); => nu merge

// Tipuri de date:
// 1. Tipuri de date primitive 
// 2. Tipuri de date referinta

// 1. (pe stiva, obtin efectiv valoarea)
// 2. contin o referinta catre o valorea (pe heap, adresa de pe heap a valorii)

//javaScript limbaj dinamic 
let nr = 7;
console.log(typeof nr);

nr="sapte";
console.log(typeof nr);

// 1. number, string, boolean, null, undefined, biginit, symbol

let model ="Volvo"; 
console.log(model, typeof model);

let isMajor = true;
console.log(isMajor, typeof isMajor);

let test;
console.log(typeof test);

//2. obiecte, array, functii, date calendaristice etc.

let array=[1, 2, 3];
console.log(typeof array);

let person =
{
    name: "Bob",
    age: 21
}
console.log(person, typeof person);

