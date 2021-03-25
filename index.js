// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name) 
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function removeLastCat(){
    return cats.slice(0, 2)
}
function removeFirstCat(){
    return cats.slice(1,3) 
}
function appendCat(name){
    let copycats = [...cats, name];
    return copycats
    // [...copycats, name]
}
function prependCat(name){
    let copycats = [name, ...cats];
    return copycats 
    // [copycats, ...name]
}
