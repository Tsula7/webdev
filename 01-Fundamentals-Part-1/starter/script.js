/*
let js ='amazing';

//console.log(40 + 8 + 23 - 10);
//console.log ("jonas");

let firstname= "Giga"
//console.log(firstname)

//let jonama&tild = 'jm'
 
let myFirstJob ="Programmer"
let myCurrentJob = "Teacher"

let job1 = "Programmer"
let job2 = "Teacher."

let country = "Georgia";
let continent = "Europe";
let population = "3 500 000"


console.log(country)
console.log(continent)
console.log(population)


true; 
console.log(true)


// Math Operators
const now =2037;
const ageJonas = now -1991
const ageSarah =now - 2018;
console.log(ageJonas,ageSarah);
console.log(ageJonas*2, ageJonas /10, 2**3);
//2**3 means 2 to power of 3 (ხარისხში აყვანა)




//Assignment Operators
let x =10 + 5;
x +=10; //x=x+10=25
x *=4; //x=x*4
x++; //x=x+1
x--; //x=x-1
console.log(x);

// Comparison OPeratoprs
console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >=18);

const isFullage = ageSarah >= 18;





const now =2037;
const ageJonas = now -1991
const ageSarah =now - 2018;
console.log(now-1991 > now - 2018);
let x,y;
x=y=25-10-5;//x=y=10, x=10
console.log(x,y);
const averageAge =(ageJonas+ageSarah)/2
console.log(ageJonas,ageSarah, averageAge);


const massMark = 78
const heightMark=1.69

const massJohn = 92
const heightJohn =1.95

const BMImark = massMark/(heightMark*heightMark)
console.log(BMImark)

const BMIJohn = massJohn/(heightJohn*heightJohn)
console.log(BMIJohn)

const markHigherBMI = BMImark> BMIJohn
console.log(markHigherBMI)


const firsName = 'Alex';
const job ='teacher';
const birthYear =1991;
const year=2023;

const alex ="I'm "+ firsName + ', a '+ (year-birthYear)+' years old '+job+'!'; //ძველი მეთოდი
console.log(alex);

const alexNew = `I'M  ${firsName}, a ${year-birthYear} years old ${job}  `//ახალი მეთოდი. ე.წ. Template literals
console.log(alexNew)

//ძველი მეთოდი
console.log('String with \n\
miltiple \n\
lines');

//Template literals
console.log(`String with
multiple
lines`)

const age = 15;
if(age >= 18){
    console.log('Sarah  can start diving license 🚗');
}else{
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`)
}

const birthYear=1998;

let century; //გამოცხადდა ცვლადი ბლოკის გარეთ მნიშვნელობის გარეშე.
if(birthYear<=2000){
    century=20;
} else {
    century=21;
}
console.log(century)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark>BMIJohn){
    console.log(`Mark's BMI is higher than John's!`)
}else {
    console.log(`Johns BMI is Higher than Mark's!`)
}

if (BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else {
    console.log(`Johns BMI (${BMIJohn}) is Higher than Mark's (${BMIMark})!`)
}

<<<<<<< HEAD
=======





// const inputYear ='1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear)+18)

// //Coercion
// console.log('im '+ 37 + ' years old');
// console.log('23'-'10'-3);
// console.log('23'*'2')
// console.log('23'/'2')

// const age ='18';
// if(age ===18) console.log('You are adult(strict)')
// if(age ==18) console.log('You are adult(loose)')
// const favorite =Number (prompt("what's your favorite number? "));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23){
//     console.log('Cool! 23 is great number')
// } else if (favorite===7){
//     console.log('7 is great number also')
// }else {
//     console.log('Invalid number! use 7 or 23!')
// }

// if (favorite !==23) console.log('Why not 23?');

const hasDriversLicense = true;
const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive')
// }

const isTired =false;

// console.log(hasDriversLicense||hasGoodVision||isTired)

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!')
} else{
    console.log('Someone else should drive...')
}
// 



// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;

// console.log(scoreDolphins,scoreKoalas);

// if(scoreDolphins===scoreKoalas){
//     console.log("Both win the trophy")
// }
// else if (scoreDolphins>scoreKoalas){
//     console.log("Dolphins win the trophy")
// }else{
//     console.log('Koalas win the trophy')
// // }
// // */

// <<<<<<< HEAD
// const age =16;
// age >=18 ? console.log('I like drink wine'): console.log('i like to drink water');



const bill =275;
const tip = bill >= 50 && bill <=300 ? bill*15/100 : bill*20/100;
console.log(`The Bill was ${bill},the tip was ${tip} and the total value is ${bill+tip}`)