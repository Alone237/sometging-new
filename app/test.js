// syntax: is the structure of code

function greet(){
    console.log("hello user")
    console.log("hello user")
    console.log("hello user")
    console.log("hello user")
    console.log("hello user")

}


function bmi(){
    let height=2.3
    let weight=20
    let bmiCalc=weight/(height*height)
    console.log(`My bmi is ${bmiCalc}`)

}


// Creating functions with input
function bmiWithInput(weight, height){

    let bmiCalc=weight/(height*height)
    console.log(`this the output of functions with input: ${bmiCalc} `)

}


greet()
bmi()
bmiWithInput(34, 2.1)