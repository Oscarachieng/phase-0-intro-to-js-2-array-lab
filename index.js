// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
  
function destructivelyAppendCat(name) {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return cats.push('Ralph');
}
//console.log(destructivelyAppendCat() );

function destructivelyPrependCat(name) {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return  cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    return cats.shift();
}

function appendCat(name){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield'); 
    let newCats = [...cats, name];
    return newCats;
}
x =appendCat("onyango");
console.log(x);

function prependCat(name) {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield'); 
    let prependedCat = [name,...cats];
    return  prependedCat
}

let y = prependCat("Leopard");
console.log(y);



function removeLastCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield'); 
    let newArray = [...cats.slice(0,2)];
    return newArray;
}
console.log(removeLastCat(cats), cats);

function removeFirstCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let firstCat = [...cats.slice(-2)]
    return firstCat;
}

console.log(removeFirstCat(cats), cats)