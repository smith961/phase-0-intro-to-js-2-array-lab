// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield' ,'Ralph');
  }
function destructivelyPrependCat(){
    
    
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    

    cats.pop();
}
function destructivelyRemoveFirstCat(){

    cats.shift();
}
function appendCat(){
    
    const appendCat = [...cats, "Broom"];
    return appendCat;
}
function prependCat(){
   
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat(){
    const cats = [ "Milo", "Otis", "Garfield"];
    const  removeLastCat = cats.slice(0,2);
    return removeLastCat;

}
function removeFirstCat(){
    const cats = [ "Milo", "Otis", "Garfield"];
    const removeFirstCat = cats.splice(1,2);
    return removeFirstCat;
}