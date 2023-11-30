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


// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;

// console.log(scoreDolphins,scoreKoalas);


const calcAverage = (score1,score2,score3)=> {
     const scoreAverage = (score1+score2+score3)/3;
     return scoreAverage;
}

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas =calcAverage(23,34,27);

const checkwinner = function (scoreDolphins,scoreKoalas){
    if (scoreDolphins>scoreKoalas*2){
    console.log(`Dolphins win ( ${scoreDolphins} vs. ${scoreKoalas})`)
    return; } else if (scoreKoalas>scoreDolphins*2){
    console.log(`Koalas win ( ${scoreKoalas} vs. ${scoreDolphins})`)
    return;
 } else{
    console.log(`No team wins...`)
 }
} 
checkwinner(scoreDolphins,scoreKoalas);


const friends = ['michael', 'Seteven', 'Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);


friends[2]= 'Jay'
console.log(friends);




// ელემენტის ჩამატება მასივის ბოლოში <<.push >> მეოდი
const friends = ['michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay')
console.log(friends);
console.log(newLenght);

// ელემენტის ჩამატება მასივის დასაწყიში unshift მეთოდი

friends.unshift('John');
console.log(friends);
// ელემენტების ამოღება მასივიდან, ბოლო ელემენტის ამოღება pop მეთოდით

friends.pop();
const poped = friends.pop();
console.log(poped);
console.log(friends);

//პირველი ელემენტის ამოღება shift მეთოდით

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'))  // indexOf აბრუნებს ელემენტის პოზიციას მასივში
console.log(friends.indexOf('Bob'))  // indexOf იმ ელემენტზე რომელიც არ არის მასივში დააბრუნებს -1 მნიშვნელობას


console.log(friends.includes('Steven')) //includes მეთოდი ამოწმებს არი თუ არა ელემენტი მასივში და აბრუნებს true or false მნიშვლობას strict equality შედარებით.
console.log(friends.includes('Bob'))

// includes გამოყენების მაგალითი:

if (friends.includes('Steven')){
    console.log('You Have friend named Steven')
}



const calcTip =  function (bill){
    if (bill >= 50 && bill <=300){
       const tip = bill*15/100
     return tip;
    } else {
       const tip = bill*20/100
     return tip;
    }
}

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
const totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];
console.log(totals);


const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ['michael', 'Peter', 'Steven']
];

const jonasObj = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037-1991,
    job: 'Teacher',
    friends: ['michael', 'Peter', 'Steven']
};

console.log(jonasObj);
console.log(jonasObj.lastName);
console.log(jonasObj['age']);


const nameKey='Name';
console.log(jonasObj['first'+ nameKey]);
console.log(jonasObj['last'+ nameKey]);

const intrestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastName, age, job and friends');

if (jonasObj[intrestedIn]){
    console.log(jonasObj[intrestedIn]);
} else {
    console.log('Wrong Request! Choose between firstname, lastName, age, job and friends. ');
}

jonasObj.location ='Portugal';
jonasObj['Twitter']='@jonasshme'
console.log(jonasObj);

console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friend and his best friend is called ${jonasObj.friends[0]}!`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function (birthYeah){
    //     return 2037-birthYeah;
              
    // calcAge: function (){                                        //.this ითვლის ამ ობიექტიდან. ობიექტს სახელიც რომ შეეცვალოს შიგინთ სწორად გამოითვლის მაინც
    //         return 2037 - this.birthYear;

    calcAge: function (){                     //თუ გამოთვლა ბევრჯერ გვჭირდება რომ არ ითვალოს ყოველ ჯერზე თავიდან ვინახავთ ცვლადში გამოთვლის პასუხს და მერე ვიყენებთ მას
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} drivers license`;
    
    }
 
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary ());



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi;
    }
}

const bmiResult = john.calcBMI()>mark.calcBMI()? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`:
`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(bmiResult);


console.log('lifting weights repetitiom 1')


//for loop keeps running while conditio is TRUE
for(let rep=1; rep <=10; rep++){
    console.log(`lifting weights repetitiom ${rep}`)

}


const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ['michael', 'Peter', 'Steven'],
    true
];
const types = [];




for(let i = 0; i<jonasArray.length;i++){
    console.log(jonasArray[i], typeof jonasArray[i] );
   //ახაილ types მასივის შევსება for loop -ით
    // types[i] = typeof jonasArray[i];
    types.push (typeof jonasArray[i]);

}
console.log(types);

const years=[1991,2007,1969,2020];

const ages = [];
for (let i=0; i<years.length; i++){
  ages.push (2037- years[i]);

}
console.log(ages);

// continue and break

// continue ამ შემთხვევაში გამოტოვებს ყველა იმ მნიშვნოლობას რომელიც არ არის ტექსტური და შესაბამისად ლოგში ამოვა მარტო ტექსტური(string)მნიშვნელობები
console.log('----მხოლოდ ტექსტური(string)----')
for(let i = 0; i<jonasArray.length;i++){
    if (typeof jonasArray[i] !== 'string' ) continue;
    console.log(jonasArray[i], typeof jonasArray[i] );

}
console.log('----შეწყვიტე ციკლი პიველ რიცხვზე(number))----')

for(let i = 0; i<jonasArray.length;i++){
    if (typeof jonasArray[i] === 'number' ) break;
    console.log(jonasArray[i], typeof jonasArray[i] );

}

// break


//backward loop
const jonas = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ['michael', 'Peter', 'Steven'],
];
for(let i=jonas.length-1;i>=0;i--){
    console.log(i, jonas[i]);
}
for (let excercise =1; excercise<=4; excercise++){
    console.log(`-------starting exercise${excercise} 🕰️`);
for(let rep=1;rep<6;rep++){
    console.log(`Exercise ${excercise}: Lifting weight repetition ${rep} 🏋️`);
}


}

//while loop


// for(let rep=1; rep <=10; rep++){
//     console.log(`lifting weights repetitiom ${rep}`);

// }

let rep=1;
while(rep<=10){
    // console.log(`While lifting weights repetitiom ${rep}`);
    rep++;

}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while(dice !==6){
    console.log(`You roller a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice===6) console.log('loop is to end..')

}
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));

const x = '23';

const calcAge = x => 2037 - x;
