// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name);

//console.log(destructivelyAppendCat("Ralph"));

const destructivelyPrependCat = name => cats.unshift(name);

//console.log(destructivelyPrependCat("Bob"))

const destructivelyRemoveLastCat = name => cats.pop(name);

//console.log(destructivelyAppendCat());

const destructivelyRemoveFirstCat = name => cats.shift(name);

const appendCat = name => [...cats, name];

const prependCat = name => [name, ...cats];

const removeLastCat = () => [...cats.slice(0, cats.length - 1)];

const removeFirstCat = () => [...cats.slice(1)];