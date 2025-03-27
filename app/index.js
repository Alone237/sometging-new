/*class Animal{
    constructor(){
        console.log("i am a animal");
    }
    getClassType(){
        return  "animal";
    }
    
}
var animal = new Animal();
console.log(animal.getClassType());*/

// //let name = 'bim';
// name = {};
// name = 3;
// console.log(name)//

// //template literals//
 /*const name= 'bim';
 const country = 'uk';
const age = 12;
console.log("name:" + name + " country" + " age " + age);*/

//spread operators//
/*const arrayOne  = ['xixi','nini','fafa']
const arrayTwo  = ['ziniii','koimini','eeomd']

 const concatArray = [...arrayOne, ...arrayTwo];

 concatArray.forEach(function(name){
    console.log(name);
 });*/

 //lexical this//
/*const person ={
    name: 'alex',
    car: ['lamvo','ferari'],
    toString: function(){
        console.log(`${this.name} has ${this.car}`)
    }
    }
    person.toString();*/

//enhance object pties//
/*const calculator = name  =>{
    return{
        name
    }
}
const calc = calculator('casio');
console.log(calc.name)*/

// obje//
const calculatePay = (yearSalary,bonus = 0) =>
     
console.log(calculatePay(22000));