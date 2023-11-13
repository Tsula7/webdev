'use strict';

// let hasDriversLicense = false;
// const passTest =true;
// if (passTest) hasDriversLicense =true;
// if (hasDriversLicense)console.log('i can drive');


// const interface ='Audio'
// const private =534;

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
