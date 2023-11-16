'use strict';

// let hasDriversLicense = false;
// const passTest =true;
// if (passTest) hasDriversLicense =true;
// if (hasDriversLicense)console.log('i can drive');


// const interface ='Audio'
// const private =534;
/*
function logger(){
    console.log('My name is Jonas')
}

//ფუნქციია გამოძახება. calling/running/ invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)
const appleOrangeJuice =fruitProcessor(6,7)
console.log(appleOrangeJuice);


//Function declaration
function calcAge1(birthYeah){
    // const age = 2037 -birthYeah;
    return 2037- birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1)

//function expression
const calcage2 =function(birthYeah){
    return 2037 - birthYeah
}
const age2 = calcage2(1991);
console.log (age1, age2);


const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYeah, firstname) => {
    const age =2037-birthYeah;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1988, 'Bob'));
console.log(' ')
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

const calcAge=function(birthYeah){
    return 2037 -birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstname)  {
    const age =calcAge(birthYeah)
    const retirement = 65 - age;
    if(retirement>0){
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement;
    } else{
        console.log(`${firstname} has already retired`)
        return -1;
    }

    return retirement;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1950,'Bob'));

